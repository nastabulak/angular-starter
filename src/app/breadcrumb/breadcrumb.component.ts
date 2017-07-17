import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import { CourseService } from '../courses/course.service';
import { Course } from '../courses/course';

@Component({
  selector: "breadcrumb",
  templateUrl: 'breadcrumb.component.html'
})
export class BreadcrumbComponent  {

 course:Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
  ) {
   
  }


ngOnInit(){

    this.route.params
          .subscribe(params => {
             let courseId = +params['id'];
             if(courseId) {
       this.courseService.getCourse(courseId)
      .subscribe(course => {
        this.course=course;
        
      });
             }
          })
}
   
}
