import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportServiceProvider } from '../models/report-service-provider';
import { ReportType } from '../models/report-type.enum';
import { Invoice, InvoiceDocument } from './invoices-report.schema';
import { InvoicesRecordDTO } from './invoices-record.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class InvoicesReportService extends ReportServiceProvider<
  Invoice,
  InvoicesRecordDTO
> {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {
    super(invoiceModel, ReportType.Invoices, 'Invoices Report');
  }

  getRandomRecord(): Invoice {
    const createdAt = faker.date.past();
    return {
      createdAt,
      modifiedAt: faker.date.between(createdAt, Date.now()),
      currency: faker.finance.currencyCode(),
      amount: parseFloat(faker.finance.amount()),
    };
  }
}
