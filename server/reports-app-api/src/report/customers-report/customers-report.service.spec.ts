import { Test, TestingModule } from '@nestjs/testing';
import { CustomersReportService } from './customers-report.service';

describe('CustomersReportService', () => {
  let service: CustomersReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersReportService],
    }).compile();

    service = module.get<CustomersReportService>(CustomersReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
