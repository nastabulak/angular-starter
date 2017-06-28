import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CoursesComponent } from '../courses.component'

@Component({
    selector: 'child-courses',
    templateUrl: 'child-courses.component.html'
})

export class ChildCoursesComponent {}