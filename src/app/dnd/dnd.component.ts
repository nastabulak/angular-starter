import {Component} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'dnd',
    templateUrl: 'dnd.component.html',
    styleUrls: ['dnd.component.css'],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: DndComponent, multi: true}
    ]
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
       
    }

    private onRemoveModel(args) {
        let [el, source] = args;
    }

    
    _value = '';
    propagateChange = (_:any) => {}

    get value (){
        return this._value
    }
    set value (val) {
        this._value = val
        this.propagateChange(this._value)
    }

    onChange (event: KeyboardEvent) {
        const target = event.target as HTMLInputElement
        this.value = target.value
    }
    writeValue( value: any){
        if(value !== undefined){
            this.value = value
        }
    }

    registerOnChange (fn: (_: any) => any){
        this.propagateChange = fn
    }
    registerOnTouched (){}
}
  
  


