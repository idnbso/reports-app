import { CurrencyPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { ReportType } from './report-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ReportsColumnsService {
  private columnsFactory = new Map<
    ReportType,
    { field: string; header: string; pipe?: PipeTransform }[]
  >();

  constructor() {
    this.columnsFactory.set(ReportType.Customers, [
      {
        field: 'name',
        header: 'Name',
      },
      {
        field: 'birthDate',
        header: 'Birth Date',
      },
      {
        field: 'location',
        header: 'Location',
      },
      {
        field: 'totalAmount',
        header: 'Total Amount',
      },
    ]);
    this.columnsFactory.set(ReportType.Periodic, [
      {
        field: 'date',
        header: 'Date',
      },
      {
        field: 'quarter',
        header: 'Quarter',
      },
      {
        field: 'totalAmount',
        header: 'Total Amount',
      },
    ]);
    this.columnsFactory.set(ReportType.Branches, [
      {
        field: 'name',
        header: 'Name',
      },
      {
        field: 'location',
        header: 'Location',
      },
      {
        field: 'totalAmount',
        header: 'Total Amount',
        pipe: new CurrencyPipe('en-US'),
      },
    ]);
    this.columnsFactory.set(ReportType.Invoices, [
      {
        field: 'amount',
        header: 'Amount',
      },
      {
        field: 'currency',
        header: 'Currency',
      },
      {
        field: 'createdAt',
        header: 'Created At',
      },
      {
        field: 'modifiedAt',
        header: 'Modified At',
      },
    ]);
  }

  getColumns(reportType: ReportType): { field: string; header: string }[] {
    return this.columnsFactory.get(reportType) ?? [];
  }
}
