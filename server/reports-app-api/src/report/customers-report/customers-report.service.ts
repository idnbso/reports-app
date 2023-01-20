import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportServiceProvider } from '../models/report-service-provider';
import { ReportType } from '../models/report-type.enum';
import { ReportDTO } from '../models/report.dto';
import { Customer, CustomerDocument } from './customer.schema';
import { CustomersRecordDTO } from './customers-record.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class CustomersReportService implements ReportServiceProvider {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async createMany(records: CustomersRecordDTO[]): Promise<number> {
    const recordsToSave = records.map(
      (record) => new this.customerModel(record),
    );
    const result = await this.customerModel.bulkSave(recordsToSave);
    return result.insertedCount;
  }

  async findAll(skipRows: number, pageRows: number): Promise<Customer[]> {
    return this.customerModel
      .find({}, { _id: 0 })
      .skip(skipRows)
      .limit(pageRows)
      .exec();
  }

  async countAll(): Promise<number> {
    return this.customerModel.count().exec();
  }

  async dropAll(): Promise<number> {
    const result = await this.customerModel.deleteMany({}).exec();
    return result.deletedCount;
  }

  async getReport(
    skipRows: number,
    pageRows: number,
  ): Promise<ReportDTO<CustomersRecordDTO>> {
    const [records, totalRecords] = await Promise.all([
      this.findAll(skipRows, pageRows),
      this.countAll(),
    ]);
    return {
      type: ReportType.Customers,
      records,
      totalRecords,
      title: 'Customeres Report',
    };
  }

  getRandomRecord(): Customer {
    return {
      createdAt: faker.date.past(),
      birthDate: faker.date.birthdate(),
      location: faker.address.country(),
      name: faker.address.cityName(),
      totalAmount: parseFloat(faker.finance.amount()),
    };
  }
}
