import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Teacher } from './teacher';
import { TEACHERS } from './mock-teacher';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TeacherService {
  
  private GET_TEACHERS_URL = 'http://localhost:8080/teachers';

  constructor (private http: Http) { }

  getTeachers(): Promise<Teacher[]> {
    //return Promise.resolve(TEACHERS);
    return this.http.get(this.GET_TEACHERS_URL)
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

}