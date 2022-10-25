import { Component, OnInit } from '@angular/core';
import { Course, mockedCourseList } from '../../../mocks/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public courses: Course[];

  constructor() {
    this.courses = mockedCourseList;
  }

  ngOnInit(): void {}
}
