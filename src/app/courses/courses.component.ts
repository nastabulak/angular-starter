import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CourseDetailsComponent } from './course-details/course.details';
import { Course } from './course';
import { CourseService } from './course.service';



import { Popup } from 'ng2-opd-popup';
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

    constructor(
        private courseService: CourseService,
        private popup:Popup,
        private router: Router) { }
    


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

    
    showPopUp(course: Course){
        this.popup.options = {
        header: "Подтверждение",
        color: "#428bca", // red, blue.... 
        widthProsentage: 50, // The with of the popou measured by browser width 
        animationDuration: 0, // in seconds, 0 = no animation 
        confirmBtnContent: "OK", // The text on your confirm button 
        cancleBtnContent: "Cancel", // the text on your cancel button 
        confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
        cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
      
        };
        
        this.popup.show(this.popup.options);
        this.course = course
    }

    closePopUp(){
        this.popup.visibleChanged.emit(false);
        this.delete(this.course)
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
              
        this.router.navigate(['/courses', course.id]);
    
  }
}




 