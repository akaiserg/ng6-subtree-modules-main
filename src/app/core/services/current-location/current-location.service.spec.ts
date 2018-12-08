let { describe, it, beforeEach, expect } = global;
import { TestBed, inject } from '@angular/core/testing';

import { CurrentLocationService } from './current-location.service';
import { Location } from '@angular/common';

class LocationMock {

  public path(): string {
    return 'path';
  }
}


describe('CurrentLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentLocationService,
        { provide: Location, useClass: LocationMock  }
      ]
    });
  });

  it('should be created', inject([CurrentLocationService], (service: CurrentLocationService) => {
    expect(service).toBeTruthy();
  }));
  describe('getPath', () => {
    it('should return a string', inject([CurrentLocationService], (service: CurrentLocationService) => {
      expect(service.getPath()).toBe('path')
    }));
  });
});
