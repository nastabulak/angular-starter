import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CoursesComponent }    from './courses.component';
import { CourseDetailsComponent }  from '../course-details/course-details.component.ts';
 
const coursesRoutes: Routes = [
  { path: 'courses',  component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'courses/new', component: CourseDetailsComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }