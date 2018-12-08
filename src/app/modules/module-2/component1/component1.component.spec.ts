let { describe, it, beforeEach, expect } = global;
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component1Component } from './component1.component';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { Example1Handler } from "../handlers/example1.handler";
import { Example2Handler } from "../handlers/example2.handler";
import { Example3Handler } from "../handlers/example3.handler";


class Example1HandlerMock {
  public call(): Promise<any> {
    return Promise.resolve("the data");
  } 
}

class Example2HandlerMock { 
}

class Example3HandlerMock { 
}


describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1Component ],
      providers: [
        { provide: Example1Handler, useClass: Example1HandlerMock },     
        { provide: Example2Handler, useClass: Example2HandlerMock },     
        { provide: Example3Handler, useClass: Example3HandlerMock },     
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
