import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Periodic, PeriodicSchema } from './periodic-report.schema';
import { PeriodicReportService } from './periodic-report.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Periodic.name, schema: PeriodicSchema },
    ]),
  ],
  providers: [PeriodicReportService],
  exports: [PeriodicReportService],
})
export class PeriodicReportModule {}
