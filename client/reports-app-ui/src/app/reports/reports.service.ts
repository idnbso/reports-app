import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { lastValueFrom, Observable } from 'rxjs';
import { ReportType } from './report-type.enum';
import { ReportDTO } from './report/report.dto';

const DEFAULT_SKIP_ROWS = 0;
const DEFAULT_PAGE_ROWS = 10;

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  private readonly API_HOST = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async getReportRecords(
    reportType: ReportType,
    skipRows: number = DEFAULT_SKIP_ROWS,
    pageRows: number = DEFAULT_PAGE_ROWS
  ): Promise<ReportDTO<any>> {
    const query = `?skipRows=${skipRows}&pageRows=${pageRows}`;
    const request = this.http.get(
      `${this.API_HOST}/report/${reportType}${query}`
    );

    return lastValueFrom<any>(request);
  }

  getReportsMenuItems(router: Router): MenuItem[] {
    return [
      {
        label: 'Customers',
        icon: 'pi pi-file',
        command: (_event) => {
          router.navigate(['/home'], {
            queryParams: { report: 'customers' },
          });
        },
      },
      {
        label: 'Periodic',
        icon: 'pi pi-file',
        command: (_event) => {
          router.navigate(['/home'], {
            queryParams: { report: 'periodic' },
          });
        },
      },
      {
        label: 'Invoices',
        icon: 'pi pi-file',
        command: (_event) => {
          router.navigate(['/home'], {
            queryParams: { report: 'invoices' },
          });
        },
      },
      {
        label: 'Branches',
        icon: 'pi pi-file',
        command: (_event) => {
          router.navigate(['/home'], {
            queryParams: { report: 'branches' },
          });
        },
      },
    ];
  }
}
