import { Test, TestingModule } from '@nestjs/testing';
import { BranchesReportService } from './branches-report/branches-report.service';
import { CustomersReportService } from './customers-report/customers-report.service';
import { InvoicesReportService } from './invoices-report/invoices-report.service';
import { PeriodicReportService } from './periodic-report/periodic-report.service';
import { ReportService } from './report.service';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportService,
        { provide: BranchesReportService, useValue: {} },
        { provide: CustomersReportService, useValue: {} },
        { provide: InvoicesReportService, useValue: {} },
        { provide: PeriodicReportService, useValue: {} },
      ],
    }).compile();

    service = module.get<ReportService>(ReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
