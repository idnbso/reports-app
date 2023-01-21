import { Test, TestingModule } from '@nestjs/testing';
import { PeriodicReportService } from '../periodic-report/periodic-report.service';

describe('PeriodicReportService', () => {
  let service: PeriodicReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodicReportService],
    }).compile();

    service = module.get<PeriodicReportService>(PeriodicReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
