import {
  Component,
  ViewChild,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { timer } from 'rxjs';
import { ReportType } from '../report-type.enum';
import { ReportsColumnsService } from '../reports-columns.service';
import { ReportsService } from '../reports.service';
import { ReportDTO } from './report.dto';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit, OnChanges {
  @Input() public reportType!: ReportType;

  @ViewChild('reportTable') reportTable?: Table;
  reportTableColumns: any[] = [];
  records: any[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  totalPageRows: number = 10;

  constructor(
    private reportsService: ReportsService,
    private reportsColumnsService: ReportsColumnsService
  ) {}

  ngOnInit(): void {
    this.setReportColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reportType']) {
      this.reportTable?.reset();
      this.setReportColumns();
    }
  }

  async loadRecords($event?: LazyLoadEvent) {
    timer(0).subscribe(() => (this.loading = true));
    const report: ReportDTO<any> = await this.reportsService.getReportRecords(
      this.reportType,
      $event?.first ?? 0,
      this.totalPageRows
    );

    this.records = report?.records ?? [];
    this.totalRecords = report?.totalRecords ?? 0;
    timer(0).subscribe(() => (this.loading = false));
  }

  setReportColumns() {
    this.reportTableColumns = this.reportsColumnsService.getColumns(
      this.reportType
    );
  }
}
