import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CoursesComponent }    from './courses.component';
import { ChildCoursesComponent }  from './child-courses/child-courses.component.ts';
 
const coursesRoutes: Routes = [
  { path: 'courses',  component: CoursesComponent },
  { path: 'courses/:id', component: ChildCoursesComponent },
  { path: 'courses/new', component: ChildCoursesComponent }
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