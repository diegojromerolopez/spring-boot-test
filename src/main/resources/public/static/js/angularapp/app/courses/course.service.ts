import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Course } from './course';
import { COURSES } from './mock-course';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

//import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CourseService {

  private GET_COURSES_URL = 'http://localhost:8080/courses';
  private ADD_COURSE_URL = 'http://localhost:8080/courses/add';

  constructor (private http: Http) { }

  getCourses(): Promise<Course[]> {
    //return Promise.resolve(COURSES);
    return this.http.get(this.GET_COURSES_URL)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
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
      numberOfHours: course.numberOfHours,
      active: course.active,
      teacher: course.teacher.id
    }

    return this.http.post(this.ADD_COURSE_URL, data, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);

  }

}