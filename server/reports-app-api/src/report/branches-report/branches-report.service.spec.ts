import { Test, TestingModule } from '@nestjs/testing';
import { BranchesReportService } from './branches-report.service';

describe('BranchesReportService', () => {
  let service: BranchesReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchesReportService],
    }).compile();

    service = module.get<BranchesReportService>(BranchesReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
