import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditCreateComponent } from './course-edit-create.component';

describe('CourseEditCreateComponent', () => {
  let component: CourseEditCreateComponent;
  let fixture: ComponentFixture<CourseEditCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEditCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
