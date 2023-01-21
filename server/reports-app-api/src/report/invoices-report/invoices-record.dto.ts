import { ReportRecordsDTO } from '../models/report-records';

export interface InvoicesRecordDTO extends ReportRecordsDTO {
  amount: number;
  currency: string;
  createdAt: Date;
  modifiedAt: Date;
}
