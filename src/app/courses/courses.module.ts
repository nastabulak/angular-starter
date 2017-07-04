import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

 
import { CoursesComponent }    from './index';
import { CourseDetailsComponent}  from '../course-details/course-details.component';

 
import { CourseService } from './course.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { DurationPipe } from '../pipes/duration.pipe';

import { CoursesRoutingModule } from './courses-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    
  ],
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    FilterPipe,
    DurationPipe,
   
  
  ],
  providers: [ CourseService ]
})
export class CoursesModule {}
