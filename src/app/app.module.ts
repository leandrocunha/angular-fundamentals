import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { LoginComponent } from './features/login/login.component';
//import { RegistrationComponent } from './features/registration/registration.component';
// import { CoursesComponent } from './features/courses/courses.component';
// import { CoursesModule } from './features/courses/courses.module';
/*import { CourseCardComponent } from './features/course-card/course-card.component';
import { CourseListComponent } from './features/course-list/course-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseEditCreateComponent } from './features/course-edit-create/course-edit-create.component';*/
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegistrationComponent,
    // CoursesComponent,
    // CourseCardComponent,
    // CourseListComponent,
    // CourseEditCreateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // CoursesModule,
    //  FontAwesomeModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
