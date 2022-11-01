import { Component, OnInit } from '@angular/core';
import { Course, mockedCourseList } from '../../../mocks/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public courses: Course[];
  public emptyTitle: string = 'Your List Is Empty';
  public emptyMessage: string =
    'Please use "Add New Course" button to add your first course';

  constructor() {
    this.courses = mockedCourseList;
  }

  ngOnInit(): void {}
}
