import { TestBed } from '@angular/core/testing';

import { RealEsteteService } from './real-estete.service';

describe('RealEsteteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealEsteteService = TestBed.get(RealEsteteService);
    expect(service).toBeTruthy();
  });
});
