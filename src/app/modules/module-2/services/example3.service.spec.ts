let { describe, it, beforeEach, expect } = global;
import { TestBed, inject } from '@angular/core/testing';
import { Example3Service } from './example3.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

describe('Example3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        Example3Service
      ]
    });
  });

  it('should be created', inject([Example3Service], (service: Example3Service) => {
    expect(service).toBeTruthy();
  }));
});
