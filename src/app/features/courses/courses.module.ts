import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseListModule } from '../course-list/course-list.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CourseListModule, CommonModule, SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
