import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoursesComponent } from './viewcourses.component';

describe('ViewcoursesComponent', () => {
  let component: ViewcoursesComponent;
  let fixture: ComponentFixture<ViewcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
