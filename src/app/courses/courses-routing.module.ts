import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CoursesComponent }    from './courses.component';
import { CourseDetailsComponent }  from '../course-details/course-details.component.ts';
import { AuthGuard } from '../_guards/index';
 
const coursesRoutes: Routes = [
  { path: 'courses',  component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: CourseDetailsComponent, canActivate: [AuthGuard] }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule {}