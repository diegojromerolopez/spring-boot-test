import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'courses',
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers: [CourseService]
})

export class CoursesComponent implements OnInit {
  courses: Course[];
  
  constructor(
      private router: Router,
      private courseService: CourseService
  ) { }
  
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().then(courses => this.courses = courses);
  }

}
