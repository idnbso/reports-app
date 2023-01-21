import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportServiceProvider } from '../models/report-service-provider';
import { ReportType } from '../models/report-type.enum';
import { PeriodicRecordDTO } from './periodic-record.dto';
import { Periodic, PeriodicDocument } from './periodic-report.schema';
import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PeriodicReportService extends ReportServiceProvider<
  Periodic,
  PeriodicRecordDTO
> {
  constructor(
    @InjectModel(Periodic.name) private periodicModel: Model<PeriodicDocument>,
  ) {
    super(periodicModel, ReportType.Periodic, 'Periodic Report');
  }

  getRandomRecord(): Periodic {
    const createdAt = faker.date.past();
    const amount = parseFloat(faker.finance.amount());
    return {
      createdAt,
      date: faker.date.past(),
      amount,
      totalAmount: amount + parseFloat(faker.finance.amount()),
    };
  }
}
