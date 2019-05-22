import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Passenger} from "../../models/passenger.model";

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) {
  }


  public getPassengers(): Observable<any> {
    return this.http.get('http://localhost:8090/passengers');
  }

  public createPassanger(passenger: Passenger) {
    return this.http.post('http://localhost:8090/passengers', passenger);
  }

}
