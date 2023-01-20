import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from './reports.service';
import { ReportComponent } from './report/report.component';
import { AppSharedModule } from '../shared/app-shared.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, AppSharedModule],
  providers: [ReportsService],
  exports: [ReportComponent],
})
export class ReportsModule {}
