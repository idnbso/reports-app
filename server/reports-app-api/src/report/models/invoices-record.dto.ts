import { ReportRecordsDTO } from './report-records';

export interface InvoicesRecordDTO extends ReportRecordsDTO {
  amount: number;
  currency: string;
  createdAt: Date;
  modifiedAt: Date;
}
