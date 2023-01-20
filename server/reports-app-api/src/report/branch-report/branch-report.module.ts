import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchReportService } from './branch-report.service';
import { Branch, BranchSchema } from './branch.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Branch.name, schema: BranchSchema }]),
  ],
  providers: [BranchReportService],
  exports: [BranchReportService],
})
export class BranchReportModule {}
