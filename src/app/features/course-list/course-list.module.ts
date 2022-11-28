import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from '../course-list/course-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardModule } from '../course-card/course-card.module';

@NgModule({
  declarations: [CourseListComponent],
  imports: [CourseCardModule, CommonModule, SharedModule],
  exports: [CourseListComponent],
})
export class CourseListModule {}
