import { ReportRecordsDTO } from '../models/report-records';

export interface BranchesRecordDTO extends ReportRecordsDTO {
  name: string;
  location: string;
  totalAmount: number;
}
