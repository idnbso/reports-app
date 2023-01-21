import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PeriodicReportService } from '../periodic-report/periodic-report.service';
import { Periodic } from './periodic-report.schema';

describe('PeriodicReportService', () => {
  let service: PeriodicReportService;

  const repositoryMock = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PeriodicReportService,
        {
          provide: getModelToken(Periodic.name),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<PeriodicReportService>(PeriodicReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
