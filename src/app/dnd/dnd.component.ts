import {Component} from '@angular/core';

@Component({
    selector: 'dnd',
    templateUrl: 'dnd.component.html',
    styleUrls: ['dnd.component.css'],

})
export class DndComponent {
   
    listAuthors:   Array <Object> = [{id: 1, author: 'Пушкин'}, {id: 2, author: 'Пушкин'},{id: 3, author: 'Пушкин'},{id: 4, author: 'Пушкин'}];
    listArticleAuthors: Array<string> = [];
 
 
    transferDataSuccess($event: any) {
        
        this.listArticleAuthors.push($event);
        console.log(this.listArticleAuthors)
    }
}
  

