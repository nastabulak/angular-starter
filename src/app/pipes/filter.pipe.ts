import { Pipe, PipeTransform } from '@angular/core';
import { COURSES } from './mock-courses';

@Pipe({

    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform( courses: any, term: string ): any {
      
       if ( !term  ) return courses;
       return courses.filter(course=>course.title.toLowerCase().indexOf(term.toLowerCase()) !== -1) ;
    } 
}

