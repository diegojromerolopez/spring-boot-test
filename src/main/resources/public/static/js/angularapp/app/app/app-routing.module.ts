import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent }      from '../courses/courses.component';
import { TeachersComponent }      from '../teachers/teachers.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: "prefix" },
  { path: 'courses',  component: CoursesComponent },
  { path: 'teachers',  component: TeachersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
