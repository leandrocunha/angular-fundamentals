import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CoursesComponent } from '../features/courses/courses.component';
import { LoginComponent } from '../features/login/login.component';
import { RegistrationComponent } from '../features/registration/registration.component';

const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('../features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('../features/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('../features/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: '',
    component: CoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
