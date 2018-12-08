let { describe, it, beforeEach, expect } = global;
import { TestBed, inject } from '@angular/core/testing';
import { SingletonExampleService } from './singleton-example.service';

describe('SingletonExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonExampleService]
    });
  });

  it('should be created', inject([SingletonExampleService], (service: SingletonExampleService) => {
    expect(service).toBeTruthy();
  }));
});
