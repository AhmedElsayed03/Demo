/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RealEstateRequestService } from './real-estate-request.service';

describe('Service: RealEstateRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealEstateRequestService]
    });
  });

  it('should ...', inject([RealEstateRequestService], (service: RealEstateRequestService) => {
    expect(service).toBeTruthy();
  }));
});
