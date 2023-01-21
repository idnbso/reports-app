import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportServiceProvider } from '../models/report-service-provider';
import { ReportType } from '../models/report-type.enum';
import { Branch, BranchDocument } from './branch.schema';
import { BranchesRecordDTO } from './branches-record.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class BranchesReportService extends ReportServiceProvider<
  Branch,
  BranchesRecordDTO
> {
  constructor(
    @InjectModel(Branch.name) private branchModel: Model<BranchDocument>,
  ) {
    super(branchModel, ReportType.Branches, 'Branches Report');
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
