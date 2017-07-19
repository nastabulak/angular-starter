import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html',
    providers: [CourseService],
})

export class CoursesComponent implements OnInit {
    courses: Course[];
    term: string = ""
    errorMessage: string;
    mode = 'Observable';
    course: Course;
    title: string;
    constructor(
        private courseService: CourseService,
        private router: Router,
        private breadcrumbService: BreadcrumbService) {
        breadcrumbService.addFriendlyNameForRoute('/courses', 'Курсы');
    }

    ngOnInit() {
        this.getCourses();
    }

    getCourses() {
        this.courseService.getCourses()
            .subscribe(
            courses => this.courses = courses,
            error => this.errorMessage = <any>error);
    }

    searchFor(value: string) {
        this.term = value
    }

    get value() {
        return this.term
    }

    delete(course: Course): void {
        if (confirm('Вы действительно хотите удалить курс?')) {
            this.courseService
                .delete(course.id)
                .subscribe(res => {
                    this.courses = this.courses.filter(c => c !== course);
                    if (this.course === course) { this.course = null; }
                });
        }
    }

    edit(course: Course): void {
        this.router.navigate(['/courses', course.id]);
    }



}




