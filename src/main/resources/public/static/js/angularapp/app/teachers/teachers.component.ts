import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'teachers',
  templateUrl: "./teachers.component.html",
  //styleUrls: ["./courses.component.css"],
  providers: [TeacherService]
})

export class TeachersComponent implements OnInit {
  teachers: Teacher[];
  
  constructor(
      private router: Router,
      private teacherService: TeacherService
  ) { }
  
  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
  }

}
