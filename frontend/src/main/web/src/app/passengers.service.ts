import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassengersService {

    constructor() { }

    passengers: Array<object> = [
        { type: 'Dorośli', age: '18+'},
        { type: 'Młodzież', age: '12-17'},
        { type: 'Dzieci', age: '2-11'},
        { type: 'Niemowlęta', age: '<2'}
    ];

    get() {
        return of(this.passengers);
    }
}
