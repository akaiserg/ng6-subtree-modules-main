let { describe, it, beforeEach, expect } = global;
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

import { PrincipalComponent } from './principal.component';
// import { CheckDataHandler } from '../handlers/check-data.handler';

class CheckDataHandlerMock {}

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalComponent ],
      providers: [
       // { provide: CheckDataHandler, useClass: CheckDataHandlerMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });
  it('should have an  attribute called title and the value dash', () => {
    expect(component.title).toEqual('dash');
  });

  it('should exist  a tittle with the text NG6 BASE', () => {
    let de: DebugElement;
    let element: HTMLElement;
    de = fixture.debugElement.query(By.css('#h1-title'));
    element  = de.nativeElement;
    expect(element.textContent).toContain('NG6 BASE');
  });


  it('should exist  a button to go the module-1', () => {
    let de: DebugElement;
    let element: HTMLElement;
    de = fixture.debugElement.query(By.css('button[id=btn-m1]'));
    element  = de.nativeElement;
    expect(element.textContent).toContain('Go to the module-1');
  });

  it('should exist  a button to go the module-2', () => {
    let de: DebugElement;
    let element: HTMLElement;
    de = fixture.debugElement.query(By.css('button[id=btn-m2]'));
    element  = de.nativeElement;
    expect(element.textContent).toContain('Go to the module-2');
  });

});
