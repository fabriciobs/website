/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducCursoFbsComponent } from './educ-curso-fbs.component';

describe('EducCursoFbsComponent', () => {
  let component: EducCursoFbsComponent;
  let fixture: ComponentFixture<EducCursoFbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducCursoFbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducCursoFbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
