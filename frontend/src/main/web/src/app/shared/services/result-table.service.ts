import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ResultTableService {

  //private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
  private flightsUrl = 'http://localhost:8090/loty/flights';
  baseUrl: string = 'http://localhost:8090/loty/flights/';


  constructor(private http: HttpClient) {}



  getFlight(): Observable<any> {
    return this.http.get('http://localhost:8090/flights');
  }

  getFlightById(flightId: number): Observable<any> {
    return this.http.get('http://localhost:8090/flights/' + flightId);
  }

  // public getFlightById(): Observable<any> {
  //   return this.http.get<Flight[]>(this.flightUrl);
  // }
}
