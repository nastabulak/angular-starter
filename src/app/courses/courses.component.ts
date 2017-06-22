import { Component } from '@angular/core';
import { ChildCoursesComponent } from './child-courses';

@Component({
    selector: 'courses',
    template: '<div> courses <child-courses></child-courses> </div>'
})

export class CoursesComponent {}