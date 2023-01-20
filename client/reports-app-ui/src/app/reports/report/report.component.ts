import { Component, ViewChild, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { timer } from 'rxjs';
import { ReportType } from '../report-type.enum';
import { ReportsService } from '../reports.service';
import { ReportDTO } from './report.dto';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  @Input() public reportType!: ReportType;

  @ViewChild('reportTable') reportTable?: Table;
  reportTableColumns: any[] = [];
  records: any[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  totalPageRows: number = 10;

  constructor(private reportsService: ReportsService) {}

  async loadRecords($event?: LazyLoadEvent) {
    this.loading = true;
    const report: ReportDTO<any> = await this.reportsService.getReportRecords(
      this.reportType,
      $event?.first ?? 0,
      this.totalPageRows
    );

    this.records = report.records;
    this.totalRecords = report.totalRecords;
    timer(0).subscribe(() => (this.loading = false));
  }
}
