let { describe, it, beforeEach, expect } = global;
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { Example1Service } from './example1.service';

describe('Example1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [Example1Service]
    });
  });

  it('should be created', inject([Example1Service], (service: Example1Service) => {
    expect(service).toBeTruthy();
  }));
});
