import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Flight} from "../../models/flight.model";


@Injectable()
export class ResultTableService {

  private flightUrl = 'http://localhost:8090/loty/flight/:id';

  constructor(private http: HttpClient) {}


  getFlight(): Observable<any> {
    return this.http.get('http://localhost:8090/loty/flights');
  }

  getFlightById(): Observable<any> {
    return this.http.get('http://localhost:8090/loty/flight/:id');
  }

  // public getFlightById(): Observable<any> {
  //   return this.http.get<Flight[]>(this.flightUrl);
  // }
}
