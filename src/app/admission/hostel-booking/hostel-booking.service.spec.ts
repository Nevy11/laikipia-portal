import { TestBed } from '@angular/core/testing';

import { HostelBookingService } from './hostel-booking.service';

describe('HostelBookingService', () => {
  let service: HostelBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostelBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
