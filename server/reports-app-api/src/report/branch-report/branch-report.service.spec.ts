import { Test, TestingModule } from '@nestjs/testing';
import { BranchReportService } from './branch-report.service';

describe('BranchReportService', () => {
  let service: BranchReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchReportService],
    }).compile();

    service = module.get<BranchReportService>(BranchReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
