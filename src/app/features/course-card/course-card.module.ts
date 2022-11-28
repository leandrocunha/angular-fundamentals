import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './course-card.component';
import { CourseModule } from '../course/course.module';

@NgModule({
  declarations: [CourseCardComponent],
  imports: [CourseModule, CommonModule, SharedModule],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
