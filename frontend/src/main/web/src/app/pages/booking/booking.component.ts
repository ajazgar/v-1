import { Component, OnInit } from '@angular/core';
import {Passenger} from "../../models/passenger.model";
import {Router} from "@angular/router";
import {BookingService} from "../../shared/services/booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  passenger: Passenger = new Passenger();

  constructor(private router: Router, private bookingService: BookingService) { }

  ngOnInit() {
  }

  createPassenger(): void {
    this.bookingService.createPassanger(this.passenger).subscribe( data => {
        alert('Passenger created successfully.');
    });
  }
}
