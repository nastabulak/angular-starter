import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
    selector: 'date',
    templateUrl: 'date.component.html',
    styleUrls: ['date.component.css'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: DateComponent, multi: true }
    ]
})


export class DateComponent implements ControlValueAccessor {
    public mask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
    _value = '';
    propagateChange = (_: any) => {

    }

    get value() {
        return this._value
    }

    set value(val) {
        this._value = val
        this.propagateChange(this._value)
    }

    onChange(event: KeyboardEvent) {
        const target = event.target as HTMLInputElement
        this.value = target.value
    }
    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value
        }
    }

    registerOnChange(fn: (_: any) => any) {
        this.propagateChange = fn
    }
    registerOnTouched() {

    }
}

