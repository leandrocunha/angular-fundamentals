import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/mocks/courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() item: Course = {
    id: '',
    title: '',
    description: '',
    creationDate: '',
    duration: 0,
    authors: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
