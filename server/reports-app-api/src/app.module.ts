import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReportModule } from './report/report.module';
import { InvoicesReportModule } from './report/invoices-report/invoices-report.module';

@Module({
  imports: [
    ReportModule,
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
      isGlobal: true,
    }),
    InvoicesReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
