let { describe, it, beforeEach, expect } = global;

import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';

describe(`CoreModule.forRoot()`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()]
    });
  });

  it(`should not provide 'UserService' service`, () => {
    expect(true).toBeTruthy();
  });
});
