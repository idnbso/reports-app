import { ReportRecordsDTO } from './report-records';

export interface PeriodicRecordDTO extends ReportRecordsDTO {
  date: string;
  quarter: string;
  totalAmount: number;
}
