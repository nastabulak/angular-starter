import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course} from '../courses/course';
import { CourseService } from '../courses/course.service';
import { CoursesComponent } from '../courses.component';



import 'rxjs/add/operator/switchMap';

import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'course-details',
    templateUrl: 'course-details.component.html'
})

export class CourseDetailsComponent {
  errorMessage: string;
  courses: Course[];
  mode = 'Observable';
  courseForm : FormGroup;
  course: Course;

  constructor (
     fb: FormBuilder,
     private courseService: CourseService,
     private route: ActivatedRoute,){
        this.courseForm = fb.group({
        title : [null,  Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]+$")])],
        description: [null, Validators.compose([Validators.required])],
        date: [null, Validators.compose([Validators.required])],
        duration: [null, Validators.compose([Validators.required])],
        authors: [null, Validators.compose([Validators.required])],
        
     })
   };
 
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.courseService.getCourse(+params.get('id')))
      .subscribe(course => this.course = course);
  }
 
 
  addCourse(course: {}) {
   
    if (!course) {
       return;
       }
    this.courseService.create(course)
                     .subscribe(
                     error =>  this.errorMessage = <any>error);
                     
  }
 
}

