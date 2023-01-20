import { ReportType } from './report-type.enum';
import { ReportRecordsDTO } from './report-records';

export interface ReportDTO<T extends ReportRecordsDTO> {
  type: ReportType;
  title: string;
  records: T[];
  totalRecords: number;
}
