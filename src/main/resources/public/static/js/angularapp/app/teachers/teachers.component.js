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
var teacher_service_1 = require('./teacher.service');
var router_1 = require('@angular/router');
var TeachersComponent = (function () {
    function TeachersComponent(router, teacherService) {
        this.router = router;
        this.teacherService = teacherService;
    }
    TeachersComponent.prototype.ngOnInit = function () {
        this.getTeachers();
    };
    TeachersComponent.prototype.getTeachers = function () {
        var _this = this;
        this.teacherService.getTeachers().then(function (teachers) { return _this.teachers = teachers; });
    };
    TeachersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'teachers',
            templateUrl: "./teachers.component.html",
            //styleUrls: ["./courses.component.css"],
            providers: [teacher_service_1.TeacherService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, teacher_service_1.TeacherService])
    ], TeachersComponent);
    return TeachersComponent;
}());
exports.TeachersComponent = TeachersComponent;
//# sourceMappingURL=teachers.component.js.map