import { Test, TestingModule } from '@nestjs/testing';
import { InvoicesReportService } from '../invoices-report/invoices-report.service';

describe('InvoicesReportService', () => {
  let service: InvoicesReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoicesReportService],
    }).compile();

    service = module.get<InvoicesReportService>(InvoicesReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
