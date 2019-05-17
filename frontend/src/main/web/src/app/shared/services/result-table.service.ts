import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable()
export class ResultTableService {


  constructor(private http: HttpClient) {}


  getFlight(): Observable<any> {
    return this.http.get('http://localhost:8090/loty/flights');
  }
}
