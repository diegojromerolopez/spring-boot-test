import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Course } from './course';
import { CourseCount } from './course-count';
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
  new_course?: Course;
  course_count: CourseCount;
  current_page: number;
  order: string;
  
  constructor(
      private router: Router,
      private courseService: CourseService
  ) {
    this.mode = "view";
    this.current_page = 1;
    this.order = "ASC";
  }

  changeMode(): void {
    if(this.mode == "view"){
      this.mode = "add";
    }else{
      this.mode = "view";
    }
  }

  returnToViewMode(): void {
    this.mode = "view";
    this.new_course = null;
  }

  ngOnInit(): void {
    let that = this;
    this.getCourseCount(function(){
      that.getCourses();
    });
    this.getTeachers();
  }

  toggleOrder(): void {
    if(this.order == "ASC"){
      this.order = "DESC";
    }else{
      this.order = "ASC";
    }
    this.getCourses();
  }

  getCourseCount(callback?: Function): void {
    if(!callback){
      callback = function(){};
    }
    this.courseService.getCourseCount().then(course_count => { this.course_count=course_count; console.log(this); callback(); } );
  }

  getCourses(): void {
    this.courseService.getCourses(this.order, this.current_page).then(courses => this.courses = courses);
  }

  getFirstCourses(): void {
    if(this.current_page > 1){
      this.current_page = 1;
      this.getCourses();
    }
  }

  getPrevCourses(): void {
    if(this.current_page > 1){
      this.current_page -= 1;
      this.getCourses();
    }
  }

  getNextCourses(): void {
    if(this.current_page < this.course_count.numberOfPages){
      this.current_page += 1;
      this.getCourses();
    }
  }

  getLastCourses(): void {
    if(this.current_page < this.course_count.numberOfPages){
      this.current_page = this.course_count.numberOfPages;
      this.getCourses();
    }
  }

  getTeachers(): void {
    this.courseService.getTeachers().then(teachers => this.teachers = teachers);
  }

  addCourse(title:string, description:string, numberOfHours:number, level:string, active:boolean, teacherId:number): void {
    let course = new Course();
    course.id = 0; 
    course.title = title;
    course.description = description;
    course.numberOfHours = numberOfHours;
    course.level = level;
    course.active = active;
    course.teacher = this.teachers.find(teacher => teacher.id==teacherId);
    this.courseService.addCourse(course).then(
      new_course => { this.getCourses(); this.new_course=new_course; }
    );
  }

  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course).then(
      new_course => { this.getCourses(); }
    );
  }

}
