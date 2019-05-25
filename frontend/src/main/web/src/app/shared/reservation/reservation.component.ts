import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  providers: [ResultTableService]
})
export class ReservationComponent implements OnInit {

  //flights: Object;
  id: number;
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  time: string;
  price: number;


  constructor(private resultTableService: ResultTableService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.resultTableService.getFlightById(this.id).subscribe(data => {
      this.id = data.flightId;
      this.departureCity = data.departureCity;
      this.arrivalCity = data.arrivalCity;
      this.departureDate = data.departureDate;
      this.arrivalDate = data.arrivalDate;
      this.flightClass = data.flightClass;
      this.time = data.time;
      this.price = data.price;
    });

  }

}
