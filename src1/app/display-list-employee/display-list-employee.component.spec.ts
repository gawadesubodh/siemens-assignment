import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListEmployeeComponent } from './display-list-employee.component';

describe('DisplayListEmployeeComponent', () => {
  let component: DisplayListEmployeeComponent;
  let fixture: ComponentFixture<DisplayListEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
