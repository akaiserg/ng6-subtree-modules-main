let { describe, it, beforeEach, expect } = global;
import { TestBed, inject } from '@angular/core/testing';

import { SingletonExampleStaticService } from '@core/services/singleton-example/singleton-example-static.service';

describe('SingletonExampleStaticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonExampleStaticService]
    });
  });

  it('should be created', inject([SingletonExampleStaticService], (service: SingletonExampleStaticService) => {
    expect(service).toBeTruthy();
  }));
});
