import {
  Controller,
  DefaultValuePipe,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ReportDTO } from './models/report.dto';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('/:type')
  async getReportRecords(
    @Param('type') type: string,
    @Query('skipRows', new DefaultValuePipe(0), ParseIntPipe) skipRows: number,
    @Query('pageRows', new DefaultValuePipe(10), ParseIntPipe) pageRows: number,
  ): Promise<ReportDTO<any>> {
    try {
      return this.reportService.getReport(type, skipRows, pageRows);
    } catch (error) {
      Logger.error(error);
      return error;
    }
  }

  @Get('seed/all')
  async seedReportsData(): Promise<number> {
    try {
      return this.reportService.seedReportsData();
    } catch (error) {
      Logger.error(error);
      return error;
    }
  }
}
