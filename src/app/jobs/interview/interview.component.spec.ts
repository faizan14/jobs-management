import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewComponent } from './interview.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('InterviewComponent', () => {
  let component: InterviewComponent;
  let fixture: ComponentFixture<InterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
