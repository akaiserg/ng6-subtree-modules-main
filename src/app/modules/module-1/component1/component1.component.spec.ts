let { describe, it, beforeEach, expect } = global;
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { SingletonExampleService } from '@core/services/singleton-example/singleton-example.service';
import { CurrentLocationService } from '@core/services/current-location/current-location.service';
import { Component1Component } from './component1.component';
import { ComponentHelpComponent } from '@shared/components/component-help/component-help.component';

class SingletonExampleServiceMock {
  public getTest(): string {
     return 'SingletonExampleServiceMock';
  }
}

class CurrentLocationServiceMock {
  public getPath(): string {
     return 'CurrentLocationService';
  }
}


describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Component1Component,
        MockComponent(ComponentHelpComponent)
      ],
      providers: [
        {provide: SingletonExampleService, useClass:SingletonExampleServiceMock },
        {provide: CurrentLocationService, useClass:CurrentLocationServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
