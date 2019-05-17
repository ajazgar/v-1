
import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClassesService {

    classes: Array<object> = [
        { class: 'ekonomiczna'},
        { class: 'business' },
        { class: 'pierwsza'}
    ];


    constructor() {

    }

    get() {
        return of(this.classes);
    }
}
