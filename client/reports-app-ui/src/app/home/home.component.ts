import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';
import { lastValueFrom, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ReportType } from '../reports/report-type.enum';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public header = 'Reports App';
  public reportType?: ReportType;
  public reportsTabsItems!: MenuItem[];
  public activeReportTabItem!: MenuItem;
  @ViewChild('reportsTabMenu') reportsTabMenu!: TabMenu;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reportsService: ReportsService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  async ngOnInit(): Promise<void> {
    this.setReportsTabsItems();

    this.subscriptions.add(
      this.route.queryParams.subscribe((params: any) => {
        this.reportType =
          (params.report?.toLowerCase() as ReportType) ?? ReportType.Customers;
        this.activeReportTabItem =
          this.reportsTabsItems.find(
            (item) => item.label?.toLowerCase() === (this.reportType as String)
          ) ?? this.reportsTabsItems[0];
      })
    );
  }

  setReportsTabsItems() {
    this.reportsTabsItems = this.reportsService.getReportsMenuItems(
      this.router
    );
  }

  onClickLogo() {
    this.router.navigate(['home'], { queryParams: {} });
  }
}
