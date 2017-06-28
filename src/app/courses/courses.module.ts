import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { CoursesComponent }    from './index';
import { ChildCoursesComponent }  from './child-courses/child-courses.component.ts';
 
import { CourseService } from './course.service';
import { FilterPipe } from './filter.pipe';
import { DurationPipe } from './duration.pipe';

import { CoursesRoutingModule } from './courses-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    ChildCoursesComponent,
    FilterPipe,
    DurationPipe
  
  ],
  providers: [ CourseService ]
})
export class CoursesModule {}