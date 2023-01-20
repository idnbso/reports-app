import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

// App
import { AppSharedModule } from './shared/app-shared.module';
import { HomeComponent } from './home/home.component';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    // PrimeNG
    SharedModule,
    TabMenuModule,
    FormsModule,
    AutoCompleteModule,
    CardModule,
    TableModule,

    // App
    AppSharedModule,
    ReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
