import { Injectable } from '@nestjs/common';
import { BranchesReportService } from './branches-report/branches-report.service';
import { CustomersReportService } from './customers-report/customers-report.service';
import { ReportType } from './models/report-type.enum';
import { ReportDTO } from './models/report.dto';

const DEFAULT_SEED_TOTAL_ROWS = 20;

@Injectable()
export class ReportService {
  private readonly reportRecrodsFactory = new Map<string, any>();

  constructor(
    private branchesReportService: BranchesReportService,
    private customeresReportService: CustomersReportService,
  ) {
    this.reportRecrodsFactory.set(
      ReportType.Branches.toLowerCase(),
      this.branchesReportService,
    );
    this.reportRecrodsFactory.set(
      ReportType.Customers.toLowerCase(),
      this.customeresReportService,
    );
  }

  async getReport(
    type: string,
    skipRows?: number,
    pageRows?: number,
  ): Promise<ReportDTO<any>> {
    const service = this.reportRecrodsFactory.get(type.toLowerCase());
    return service?.getReport(skipRows, pageRows);
  }

  async seedReportsData(): Promise<number> {
    let totalCreatedData = 0;

    for (const type in ReportType) {
      const service = this.reportRecrodsFactory.get(type.toLowerCase());

      await service?.dropAll();
      const seedData: any[] = [...Array(DEFAULT_SEED_TOTAL_ROWS)].map(() =>
        service?.getRandomRecord(),
      );

      totalCreatedData += (await service?.createMany(seedData)) ?? 0;
    }

    return totalCreatedData;
  }
}
