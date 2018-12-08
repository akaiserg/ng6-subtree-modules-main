let { describe, it, beforeEach, expect } = global;
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { Example2Service } from './example2.service';

describe('Example2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [Example2Service]
    });
  });

  it('should be created', inject([Example2Service], (service: Example2Service) => {
    expect(service).toBeTruthy();
  }));
});
