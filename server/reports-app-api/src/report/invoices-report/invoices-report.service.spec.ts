import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { InvoicesReportService } from '../invoices-report/invoices-report.service';
import { Invoice } from './invoices-report.schema';

describe('InvoicesReportService', () => {
  let service: InvoicesReportService;

  const repositoryMock = {
    findAll() {
      return {};
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvoicesReportService,
        {
          provide: getModelToken(Invoice.name),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<InvoicesReportService>(InvoicesReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
