import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ReportsService } from 'src/app/reports/reports.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router, private reportsService: ReportsService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: (_event) => {
          this.router.navigate(['/home']);
        },
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-book',
        items: this.reportsService.getReportsMenuItems(this.router),
      },
    ];
  }
}
