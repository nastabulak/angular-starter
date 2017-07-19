import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    outputs: ['searchFor']
})


export class SearchComponent {
    searchFor: EventEmitter<string> = new EventEmitter();

    search(text: string) {
        this.searchFor.emit(text)
    }
}
