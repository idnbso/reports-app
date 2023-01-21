import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Branch } from './branch.schema';
import { BranchesReportService } from './branches-report.service';

describe('BranchesReportService', () => {
  let service: BranchesReportService;

  const repositoryMock = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BranchesReportService,
        {
          provide: getModelToken(Branch.name),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<BranchesReportService>(BranchesReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
