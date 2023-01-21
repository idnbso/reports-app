import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { BranchesReportModule } from './branches-report/branches-report.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersReportModule } from './customers-report/customers-report.module';
import { InvoicesReportModule } from './invoices-report/invoices-report.module';
import { PeriodicReportModule } from './periodic-report/periodic-report.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    BranchesReportModule,
    CustomersReportModule,
    InvoicesReportModule,
    PeriodicReportModule,
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
