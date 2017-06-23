import { Injectable } from '@angular/core';
import {COURSES} from './mock-courses';

@Injectable()
export class CourseService {
    getCourses() {
        return Promise.resolve(COURSES)
    }
}