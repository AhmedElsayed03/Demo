import { TestBed } from '@angular/core/testing';

import { LandRequestService } from './land-request.service';

describe('LandRequestService', () => {
  let service: LandRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
