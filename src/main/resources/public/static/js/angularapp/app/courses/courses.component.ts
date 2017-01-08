import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { Router } from '@angular/router';
import { Teacher } from '../teachers/teacher';
import { TeacherService } from '../teachers/teacher.service';

@Component({
  moduleId: module.id,
  selector: 'courses',
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers: [CourseService]
})

export class CoursesComponent implements OnInit {
  courses: Course[];
  teachers: Teacher[];
  mode: string;
  
  constructor(
      private router: Router,
      private courseService: CourseService
  ) {
    this.mode = "view";
  }

  changeMode(): void {
    if(this.mode == "view"){
      this.mode = "add";
    }else{
      this.mode = "view";
    }
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().then(courses => this.courses = courses);
  }

  addCourse(title:string, description:string, numberOfHours:number, level:string): void {
    let course = new Course();
    course.id = 0; 
    course.title = title;
    course.description = description;
    course.numberOfHours = numberOfHours;
    course.level = level;
    this.courseService.addCourse(course).then(
      new_course => this.getCourses()
    );
  }

}