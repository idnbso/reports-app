import { ReportType } from '../report-type.enum';

export interface ReportDTO<T> {
  type: ReportType;
  title: string;
  records: T[];
  totalRecords: number;
}
