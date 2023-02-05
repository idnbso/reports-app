import { Injectable } from '@nestjs/common';
import { BranchesReportService } from './branches-report/branches-report.service';
import { CustomersReportService } from './customers-report/customers-report.service';
import { InvoicesReportService } from './invoices-report/invoices-report.service';
import { ReportType } from './models/report-type.enum';
import { ReportDTO } from './models/report.dto';
import { PeriodicReportService } from './periodic-report/periodic-report.service';

const DEFAULT_SEED_TOTAL_ROWS = 20;

@Injectable()
export class ReportService {
  private readonly reportRecordsFactory = new Map<string, any>();

  constructor(
    private branchesReportService: BranchesReportService,
    private customeresReportService: CustomersReportService,
    private invoicesReportService: InvoicesReportService,
    private periodicReportService: PeriodicReportService,
  ) {
    this.reportRecordsFactory.set(
      ReportType.Branches.toLowerCase(),
      this.branchesReportService,
    );
    this.reportRecordsFactory.set(
      ReportType.Customers.toLowerCase(),
      this.customeresReportService,
    );
    this.reportRecordsFactory.set(
      ReportType.Invoices.toLowerCase(),
      this.invoicesReportService,
    );
    this.reportRecordsFactory.set(
      ReportType.Periodic.toLowerCase(),
      this.periodicReportService,
    );
  }

  async getReport(
    type: string,
    skipRows?: number,
    pageRows?: number,
  ): Promise<ReportDTO<any>> {
    const service = this.reportRecordsFactory.get(type.toLowerCase());
    return service?.getReport(skipRows, pageRows);
  }

  async seedReportsData(): Promise<number> {
    let totalCreatedData = 0;

    for (const type in ReportType) {
      const service = this.reportRecordsFactory.get(type.toLowerCase());

      await service?.dropAll();
      const seedData: any[] = [...Array(DEFAULT_SEED_TOTAL_ROWS)].map(() =>
        service?.getRandomRecord(),
      );

      totalCreatedData += (await service?.createMany(seedData)) ?? 0;
    }

    return totalCreatedData;
  }
}
