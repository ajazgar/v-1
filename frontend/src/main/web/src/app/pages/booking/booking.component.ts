import { Component, OnInit } from '@angular/core';
import {Passenger} from "../../models/passenger.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../shared/services/booking.service";
import {ResultTableService} from "../../shared/services/result-table.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [BookingService, ResultTableService]
})
export class BookingComponent implements OnInit {

  passenger: Passenger = new Passenger();

  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  time: string;
  price: number;
  id: number;

  public contentEditable = false;

  constructor(private route: ActivatedRoute, private bookingService: BookingService, private resultsService: ResultTableService) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.resultsService.getFlightById(this.id).subscribe(data => {
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

  toggleEditable(event) {
    if ( event.target.checked ) {
      this.contentEditable = true;
    }
  }

  // createPassenger(): void {
  //   this.bookingService.createPassanger(this.passenger).subscribe( data => {
  //       alert('Passenger created successfully.');
  //   });
  // }
}
