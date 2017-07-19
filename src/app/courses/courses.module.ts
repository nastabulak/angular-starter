import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { PopupModule } from 'ng2-opd-popup';
import { TextMaskModule } from 'angular2-text-mask';
import { DragulaModule } from 'ng2-dragula';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

import { FilterPipe, DurationPipe } from '../_pipes/index';


import { CoursesComponent } from './index';
import { CourseDetailsComponent, DurationComponent, DateComponent, DndComponent } from '../course-details/index';


import { CourseService } from './course.service';
import { CoursesRoutingModule } from './courses-routing.module';
import { ErrorSummaryComponent } from '../course-details/error-summary/error-summary.component';


import { SearchComponent } from './search/search.component'
import { CourseListComponent } from './course-list/course-list.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    TextMaskModule,
    DragulaModule,
    PopupModule.forRoot(),
    Ng2BreadcrumbModule.forRoot()
  ],
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    FilterPipe,
    DurationPipe,
    DurationComponent,
    DateComponent,
    DndComponent,
    SearchComponent,
    CourseListComponent,
    ErrorSummaryComponent
  ],
  providers: [CourseService]
 
})
export class CoursesModule {}
