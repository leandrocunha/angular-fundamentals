import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CourseListModule } from '../course-list/course-list.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CourseListModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
