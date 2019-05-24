import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get('http://localhost:8090/hotels');
  }

  getHotelByCity(city: string): Observable<any> {
    return this.http.get('http://localhost:8090/hotels/' + city);
  }
}
