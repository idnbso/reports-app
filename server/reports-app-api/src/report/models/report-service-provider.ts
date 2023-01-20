import { ReportDTO } from './report.dto';

export interface ReportServiceProvider {
  getReport(skipRows?: number, pageRows?: number): Promise<ReportDTO<any>>;
}
