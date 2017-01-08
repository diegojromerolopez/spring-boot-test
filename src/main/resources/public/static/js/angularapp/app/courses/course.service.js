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
var teacher_service_1 = require('../teachers/teacher.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
//import { Observable }     from 'rxjs/Observable';
var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
        this.GET_COURSES_URL = 'http://localhost:8080/courses';
        this.GET_COURSE_COUNT_URL = 'http://localhost:8080/courses/count';
        this.ADD_COURSE_URL = 'http://localhost:8080/courses/add';
        this.DELETE_COURSE_URL = 'http://localhost:8080/courses/{id}/delete';
    }
    CourseService.prototype.getCourses = function (order, page) {
        var get_courses_url = this.GET_COURSES_URL + "?page={page}&order={order}";
        if (order != "ASC" && order != "DESC") {
            order = "ASC";
        }
        get_courses_url = get_courses_url.replace(/\{order\}/, order);
        get_courses_url = get_courses_url.replace(/\{page\}/, "" + page);
        return this.http.get(get_courses_url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CourseService.prototype.getTeachers = function () {
        var teacherService = new teacher_service_1.TeacherService(this.http);
        return teacherService.getTeachers();
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
    CourseService.prototype.getCourseCount = function () {
        return this.http.get(this.GET_COURSE_COUNT_URL)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CourseService.prototype.addCourse = function (course) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var data = {
            title: course.title,
            description: course.description,
            level: course.level,
            numberOfHours: +course.numberOfHours,
            isActive: course.active ? "true" : "false",
            teacher: course.teacher.id
        };
        console.log("Prepared data to send");
        console.log(data);
        return this.http.post(this.ADD_COURSE_URL, data, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CourseService.prototype.deleteCourse = function (course) {
        var course_id = "" + course.id;
        var delete_this_course_url = this.DELETE_COURSE_URL.replace(/\{id\}/, course_id);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var data = {};
        return this.http.post(delete_this_course_url, data, options)
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