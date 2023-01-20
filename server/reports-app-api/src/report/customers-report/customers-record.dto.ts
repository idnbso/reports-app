import { ReportRecordsDTO } from '../models/report-records';

export interface CustomersRecordDTO extends ReportRecordsDTO {
  name: string;
  birthDate: Date;
  location: string;
  totalAmount: number;
}
