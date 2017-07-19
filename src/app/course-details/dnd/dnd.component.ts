import {Component, Output} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'dnd',
    templateUrl: 'dnd.component.html',
    styleUrls: ['dnd.component.css'],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: DndComponent, multi: true}
    ],
   
})

export class DndComponent implements ControlValueAccessor {
  
    public authorsList: Array<string> = ['Пушкин', 'Лермонтов', 'Чебурашка', 'Котиков', 'Петрович'];
    public authorsChosen: Array<string> = ["ляля"];
  

    constructor(private dragulaService: DragulaService) {
        dragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value) => {
            this.onRemoveModel(value.slice(1));
        });

    }

    private onDropModel(args) {
        let [el, target, source] = args;
        this.authorsChosen
       
    }

    private onRemoveModel(args) {
        let [el, source] = args;
    }

   
    writeValue( value: any){
      
    }

    registerOnChange (fn: (_: any) => any){
        
    }
    registerOnTouched (){}
}
  


