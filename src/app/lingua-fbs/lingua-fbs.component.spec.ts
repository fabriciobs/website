/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinguaFbsComponent } from './lingua-fbs.component';

describe('LinguaFbsComponent', () => {
  let component: LinguaFbsComponent;
  let fixture: ComponentFixture<LinguaFbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguaFbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguaFbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
