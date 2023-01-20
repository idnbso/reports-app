import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { BranchesReportService } from './branches-report/branches-report.service';
import { BranchesReportModule } from './branches-report/branches-report.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersReportModule } from './customers-report/customers-report.module';

@Module({
  imports: [
    BranchesReportModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    CustomersReportModule,
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
