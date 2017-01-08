
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Course } from './course';
import { COURSES } from './mock-course';

import { Teacher } from '../teachers/teacher';
import { TeacherService } from '../teachers/teacher.service';

import { Observable }     from 'rxjs/Observable';
import { CourseCount } from './course-count';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

//import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CourseService {

  private GET_COURSES_URL = 'http://localhost:8080/courses';
  private GET_COURSE_COUNT_URL = 'http://localhost:8080/courses/count';
  private ADD_COURSE_URL = 'http://localhost:8080/courses/add';
  private DELETE_COURSE_URL = 'http://localhost:8080/courses/{id}/delete';

  constructor (private http: Http) { }

  getCourses(order: string, page: number): Promise<Course[]> {
    let get_courses_url = this.GET_COURSES_URL+"?page={page}&order={order}";
    if(order != "ASC" && order != "DESC"){
      order = "ASC";
    }
    
    get_courses_url = get_courses_url.replace(/\{order\}/, order);
    get_courses_url = get_courses_url.replace(/\{page\}/, ""+page);
    
    return this.http.get(get_courses_url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }

  getTeachers(): Promise<Teacher[]> {
      let teacherService = new TeacherService(this.http);
      return teacherService.getTeachers();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  getCourseCount(): Promise<CourseCount> {
    return this.http.get(this.GET_COURSE_COUNT_URL)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }

  getCourse(id: number): Promise<Course> {
    return this.getCourses()
             .then(courses => courses.find(course => course.id === id));
  }

  addCourse(course: Course): Promise<Course>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let data = {
      title: course.title,
      description: course.description,
      level: course.level,
      numberOfHours: +course.numberOfHours,
      isActive: course.active? "true":"false",
      teacher: course.teacher.id
    }

    console.log("Prepared data to send");
    console.log(data);

    return this.http.post(this.ADD_COURSE_URL, data, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);

  }

  deleteCourse(course: Course): Promise<Course>{
    let course_id = ""+course.id;
    let delete_this_course_url = this.DELETE_COURSE_URL.replace(/\{id\}/, course_id);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = {};
    return this.http.post(delete_this_course_url, data, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

}