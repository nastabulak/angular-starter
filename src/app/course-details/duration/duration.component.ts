import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'duration',
    templateUrl: 'duration.component.html',
    styleUrls: ['duration.component.css'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: DurationComponent, multi: true }
    ]
})
export class DurationComponent implements ControlValueAccessor {
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


