import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Customer } from './customer.schema';
import { CustomersReportService } from './customers-report.service';

describe('CustomersReportService', () => {
  let service: CustomersReportService;

  const repositoryMock = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersReportService,
        {
          provide: getModelToken(Customer.name),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<CustomersReportService>(CustomersReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
