import { Component, OnInit } from '@angular/core';
import { CourseService } from '../courses/course.service';
import { Course } from '../courses/course';
import { DurationComponent } from '../duration/duration.component' ;
import { DateComponent } from '../date/date.component' ;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesComponent } from '../courses.component';
import {Popup} from 'ng2-opd-popup';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'course-details',
    templateUrl: 'course-details.component.html'
})

export class CourseDetailsComponent implements OnInit {

  authors = ['пушкин', 'лермонтов',
            'суперавтор', 'чебурашка'];

  model = new Course ();
  value; id;
  submitted = false;
  public routeParams: any = {}

  constructor (
    private courseService: CourseService,
    private router: Router,
    private popup: Popup,
    private route: ActivatedRoute){
       this.route.params.subscribe(params => {
       this.id = +params['id']})
       
    }

  
  ngOnInit() {
     if (this.id) {
       this.courseService.getCourse(this.id) 
      .subscribe((course: Course) => ( this.model = course ))} 
     
           
  }
  goBack(): void {             
    this.router.navigate(['../courses']);    
  }

  

  addCourse(course: Course) {
    
    this.courseService.create(course)
              
                    
  }

  updateCourse(course: Course): void {
    console.log(this.model.id)
     if (this.model.id){
      course.id = this.model.id
      this.courseService.update(course)
                        
     } else {
        this.addCourse(course);
         }
      
      
  }   

  submit(valid, value){
    if (valid) {
      this.submitted = true;
      this.updateCourse(value)
    } else {
      this.showPopUp(valid)
    }
  }
  
  showPopUp(value){
    this.popup.options = {
      header: "Ошибка",
      color: "#428bca",
      widthProsentage: 30,
      animationDuration: 0, 
      showButtons: false, 
    };
    this.value = value
    this.popup.show(this.popup.options);
  }

  closePopUp(){
    this.popup.visibleChanged.emit(false);
  }
  
}





 