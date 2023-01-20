import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { SharedModule } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, SharedModule, MenubarModule, TableModule],
  exports: [MenubarComponent, TableModule],
})
export class AppSharedModule {}
