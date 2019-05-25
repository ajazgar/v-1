import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ResultTableService {


  constructor(private http: HttpClient) {}



  getFlight(): Observable<any> {
    return this.http.get('http://localhost:8090/flights');
  }

  getFlightById(flightId: number): Observable<any> {
    return this.http.get('http://localhost:8090/flights/' + flightId);
  }
}
