import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollcoursesComponent } from './enrollcourses.component';

describe('EnrollcoursesComponent', () => {
  let component: EnrollcoursesComponent;
  let fixture: ComponentFixture<EnrollcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
