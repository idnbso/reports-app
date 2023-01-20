import { TestBed } from '@angular/core/testing';

import { ReportsColumnsService } from './reports-columns.service';

describe('ReportsColumnsService', () => {
  let service: ReportsColumnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsColumnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
