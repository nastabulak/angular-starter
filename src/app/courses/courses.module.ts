import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { CoursesComponent }    from './courses.component';
import { ChildCoursesComponent }  from './child-courses/child-courses.component.ts';
 
import { CourseService } from './course.service';

import { CoursesRoutingModule } from './courses-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    ChildCoursesComponent
  ],
  providers: [ CourseService ]
})
export class CoursesModule {}