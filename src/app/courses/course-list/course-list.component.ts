import { Component, EventEmitter } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
    selector: 'course-list',
    templateUrl: 'course-list.component.html',
    inputs: ['courses', 'value'],
    outputs: ['delete', 'edit']
})

export class CourseListComponent {
    courses: Course[];
    value: string;
    edit: EventEmitter<Course> = new EventEmitter<Course>()
    delete: EventEmitter<Course> = new EventEmitter<Course>()
}

