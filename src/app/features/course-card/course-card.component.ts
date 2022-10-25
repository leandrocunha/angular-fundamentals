import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/mocks/courses';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course = {
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
