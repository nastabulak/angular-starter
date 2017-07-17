import {Component} from '@angular/core';
import {SummaryError} from './summary-error';

@Component ({
    selector: 'error-summary',
    templateUrl: 'error-summary.component.html',
    inputs: ['errors']
})

export class ErrorSummaryComponent{
    errors:SummaryError[]
}