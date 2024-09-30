import { TestBed } from '@angular/core/testing';

import { UnitRequestService } from './unit-request.service';

describe('UnitRequestService', () => {
  let service: UnitRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
