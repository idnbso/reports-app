import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from './invoices-report.schema';
import { InvoicesReportService } from './invoices-report.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  providers: [InvoicesReportService],
  exports: [InvoicesReportService],
})
export class InvoicesReportModule {}
