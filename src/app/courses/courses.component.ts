import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { CourseDetailsComponent } from './course-details/course.details';
import { Course} from './course';
import { CourseService } from './course.service';

import { Router }            from '@angular/router';

import { FilterPipe } from '../pipes/filter.pipe';
import { DurationPipe } from '../pipes/duration.pipe';



@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html',
    providers: [ CourseService ],
       
})

export class CoursesComponent implements OnInit {
   courses: Course[];
   search: string;
   errorMessage: string;
   mode = 'Observable';
   course: Course;
  
  // selectedId: number;

     constructor(
    private courseService: CourseService,
    private router: Router) { }
   
  //  isSelected(course: Course) {
     //   return course.id === this.selectedId;
  //  }

   ngOnInit() {
       this.getCourses();
   }
   getCourses() {
       
       this.courseService.getCourses()
                         .subscribe(
                          courses => this.courses = courses,
                          error =>  this.errorMessage = <any>error);
                          
                        
   }
   
   
   searchFor (value:string) {
       this.search = value        
   }

   get term () {
       return this.search
    }

    delete(course: Course): void {
         this.courseService
        .delete(course.id)
        .then(() => {
          this.courses = this.courses.filter(c => c !== course);
          if (this.course === course) { this.course = null; }
        });
      
}
    gotoDetail(course: Course ): void {
        console.log(course, course.id)
      
    this.router.navigate(['/courses', course.id]);
    
  }
}
