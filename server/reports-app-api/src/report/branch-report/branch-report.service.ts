import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportServiceProvider } from '../models/report-service-provider';
import { ReportType } from '../models/report-type.enum';
import { ReportDTO } from '../models/report.dto';
import { Branch, BranchDocument } from './branch.schema';
import { BranchesRecordDTO } from './branches-record.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class BranchReportService implements ReportServiceProvider {
  constructor(
    @InjectModel(Branch.name) private branchModel: Model<BranchDocument>,
  ) {}

  async createMany(records: BranchesRecordDTO[]): Promise<number> {
    const recordsToSave = records.map((record) => new this.branchModel(record));
    const result = await this.branchModel.bulkSave(recordsToSave);
    return result.insertedCount;
  }

  async findAll(skipRows: number, pageRows: number): Promise<Branch[]> {
    return this.branchModel
      .find({}, { _id: 0 })
      .skip(skipRows)
      .limit(pageRows)
      .exec();
  }

  async countAll(): Promise<number> {
    return this.branchModel.count().exec();
  }

  async getReport(
    skipRows: number,
    pageRows: number,
  ): Promise<ReportDTO<BranchesRecordDTO>> {
    const [records, totalRecords] = await Promise.all([
      this.findAll(skipRows, pageRows),
      this.countAll(),
    ]);
    return {
      type: ReportType.Branches,
      records,
      totalRecords,
      title: 'Branches Report',
    };
  }

  getRandomRecord(): Branch {
    return {
      createdAt: faker.date.past(),
      location: faker.address.country(),
      name: faker.address.cityName(),
      totalAmount: parseFloat(faker.finance.amount()),
    };
  }
}
