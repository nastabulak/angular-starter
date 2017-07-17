import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


 
import { CoursesComponent }    from './index';
import { CourseDetailsComponent }  from '../course-details/course-details.component';

import { PopupModule } from 'ng2-opd-popup';

import{ DurationComponent } from '../duration/duration.component' ;
import{ DndComponent } from '../dnd/dnd.component' ;
import{ DateComponent } from '../date/date.component' ;
import { TextMaskModule } from 'angular2-text-mask';

import { CourseService } from './course.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { DurationPipe } from '../pipes/duration.pipe';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

import { SearchComponent} from './search/search.component'
import { CourseListComponent} from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { DragulaModule } from 'ng2-dragula'
import {ErrorSummaryComponent} from '../course-details/error-summary/error-summary.component';
 
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    TextMaskModule,
    DragulaModule,
    PopupModule.forRoot()
    
  ],
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    FilterPipe,
    DurationPipe,
    BreadcrumbComponent,
    DurationComponent,
    DateComponent ,
    DndComponent, 
    SearchComponent,
    CourseListComponent,
    ErrorSummaryComponent

  
  ],
  providers: [ CourseService ],
  exports: [
    BreadcrumbComponent
  ]
})
export class CoursesModule {}
