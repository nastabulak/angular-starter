import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ChildCoursesComponent } from './child-courses';
import { Course} from './course';
import { CourseService } from './course.service';


import { FilterPipe } from './filter.pipe';
import { DurationPipe } from './duration.pipe';



@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html',
       
})

export class CoursesComponent implements OnInit {
   courses: Course[];
   search: string;
  
   selectedId: number;

   constructor(private courseService: CourseService) {}
   isSelected(course: Course) {
    return course.id === this.selectedId;
  }

   ngOnInit() {
       this.getCourses();
   }
   getCourses() {
       this.courseService.getCourses().then(courses => this.courses = courses);
   }
   onSelect(course: Course) {
     this.selectedId = course.id;
   }
   
   searchFor (value:string) {
       this.search = value
              
   }
   get term () {return this.search}
   
}

