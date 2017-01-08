import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { TeachersComponent } from '../teachers/teachers.component';
import { TeacherService }         from '../teachers/teacher.service';

import { CoursesComponent } from '../courses/courses.component';
import { CourseService }         from '../courses/course.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [ AppComponent, TeachersComponent, CoursesComponent ],
  providers: [ TeacherService, CourseService  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
  
}
