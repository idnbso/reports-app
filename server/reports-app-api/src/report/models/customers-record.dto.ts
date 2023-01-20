import { ReportRecordsDTO } from './report-records';

export interface CustomersRecordDTO extends ReportRecordsDTO {
  name: string;
  birthDate: string;
  location: string;
  totalAmount: number;
}
