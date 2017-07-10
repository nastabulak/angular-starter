import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';
import { CoursesComponent } from '../courses.component';

import{ PopUpComponent } from '../pop-up/pop-up.component' ;
import{ DndComponent } from '../dnd/dnd.component' ;
import{ DurationComponent } from '../duration/duration.component' ;
import{ DateComponent } from '../date/date.component' ;

import 'rxjs/add/operator/switchMap';




@Component({
    selector: 'course-details',
    templateUrl: 'course-details.component.html'
})

export class CourseDetailsComponent implements OnInit{
  
  course:Course = new Course ;
  
  errorMessage: string;
  courses: Course[];
  
  courseForm : FormGroup;
  public routeParams: any = {}

  constructor (
    fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute){
         
      this.courseForm = fb.group({
        title : [this.course.title,  Validators.compose([Validators.required,Validators.minLength(4),
          Validators.maxLength(30) ])],
        description: [this.course.description, Validators.compose([Validators.required])],
        date: [this.course.date, Validators.compose([Validators.required])],
        duration: [this.course.duration, Validators.compose([Validators.required])],
        authors: [this.course.authors, Validators.compose([Validators.required])],
      })
           
    
   }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
          this.courseService.getCourse(+params.get('id')))
      .subscribe((course: Course) => ( this.course = course ));
           
  }
    
  setValues(){
    this.courseForm.setValue({
      title: this.course.title,
      description: this.course.description,
      date: this.course.date,
      authors: this.course.authors,
      duration: this.course.duration,
      
    })
  }

  goBack(): void {             
    this.router.navigate(['../courses']);    
  }

  addCourse(course: Course) {
      
    if (!course) {
      return;
    }
    this.courseService.create(course)
                      .subscribe(
                    error =>  this.errorMessage = <any>error);
                    
  }

  updateCourse(course: Course): void {
      course.id = this.course.id
      this.courseService.update(course)
                        .then(() => this.goBack());
  }   

 
}

