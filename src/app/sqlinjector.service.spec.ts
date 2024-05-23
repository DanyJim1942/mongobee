import { TestBed } from '@angular/core/testing';

import { SqlinjectorService } from './sqlinjector.service';

describe('SqlinjectorService', () => {
  let service: SqlinjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlinjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
