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
var course_1 = require('./course');
var course_service_1 = require('./course.service');
var router_1 = require('@angular/router');
var CoursesComponent = (function () {
    function CoursesComponent(router, courseService) {
        this.router = router;
        this.courseService = courseService;
        this.mode = "view";
    }
    CoursesComponent.prototype.changeMode = function () {
        if (this.mode == "view") {
            this.mode = "add";
        }
        else {
            this.mode = "view";
        }
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        this.courseService.getCourses().then(function (courses) { return _this.courses = courses; });
    };
    CoursesComponent.prototype.addCourse = function (title, description, numberOfHours, level) {
        var _this = this;
        var course = new course_1.Course();
        course.id = 0;
        course.title = title;
        course.description = description;
        course.numberOfHours = numberOfHours;
        course.level = level;
        this.courseService.addCourse(course).then(function (new_course) { return _this.getCourses(); });
    };
    CoursesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'courses',
            templateUrl: "./courses.component.html",
            styleUrls: ["./courses.component.css"],
            providers: [course_service_1.CourseService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, course_service_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map