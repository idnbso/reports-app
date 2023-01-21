import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ReportsService } from '../reports/reports.service';

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
