import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportServiceProvider } from '../models/report-service-provider';
import { ReportType } from '../models/report-type.enum';
import { Customer, CustomerDocument } from './customer.schema';
import { CustomersRecordDTO } from './customers-record.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class CustomersReportService extends ReportServiceProvider<
  Customer,
  CustomersRecordDTO
> {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {
    super(customerModel, ReportType.Customers, 'Customers Report');
  }

  getRandomRecord(): Customer {
    return {
      createdAt: faker.date.past(),
      birthDate: faker.date.birthdate(),
      location: faker.address.country(),
      name: faker.name.fullName(),
      totalAmount: parseFloat(faker.finance.amount()),
    };
  }
}
