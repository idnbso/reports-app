import { ReportRecordsDTO } from '../models/report-records';

export interface PeriodicRecordDTO extends ReportRecordsDTO {
  date: Date;
  amount: number;
  totalAmount: number;
}
