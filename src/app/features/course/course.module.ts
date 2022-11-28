import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [CourseComponent],
})
export class CourseModule {}
