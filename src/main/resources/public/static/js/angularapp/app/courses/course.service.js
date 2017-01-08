"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
//import { Observable }     from 'rxjs/Observable';
var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
        this.GET_COURSES_URL = 'http://localhost:8080/courses';
        this.ADD_COURSE_URL = 'http://localhost:8080/courses/add';
    }
    CourseService.prototype.getCourses = function () {
        //return Promise.resolve(COURSES);
        return this.http.get(this.GET_COURSES_URL)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CourseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CourseService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    CourseService.prototype.getCourse = function (id) {
        return this.getCourses()
            .then(function (courses) { return courses.find(function (course) { return course.id === id; }); });
    };
    CourseService.prototype.addCourse = function (course) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var data = {
            title: course.title,
            description: course.description,
            level: course.level,
            numberOfHours: course.numberOfHours,
            active: course.active,
            teacher: course.teacher.id
        };
        return this.http.post(this.ADD_COURSE_URL, data, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map