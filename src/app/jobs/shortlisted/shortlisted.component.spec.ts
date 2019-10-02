import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedComponent } from './shortlisted.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('ShortlistedComponent', () => {
  let component: ShortlistedComponent;
  let fixture: ComponentFixture<ShortlistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
