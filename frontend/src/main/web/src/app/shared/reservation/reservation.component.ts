import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelsService} from "../services/hotels.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  providers: [ResultTableService, HotelsService]
})
export class ReservationComponent implements OnInit {

  flights;
  id: number;
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  time: string;
  price: number;


  hotelId: number;
  hotelName: string;
  city: string;
  firstDate: string;
  secDate: string;
  timeHotel: string;
  priceHotel: number;
  hotels;

  constructor(private resultTableService: ResultTableService,
              private route: ActivatedRoute,
              private router: Router,
              private hotelService: HotelsService) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.hotelId = params['hotelId'];
      console.log('flights:' + this.id);
      console.log('hotels:' + this.hotelId);
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

    this.hotelService.getHotelById(this.hotelId).subscribe(data => {
      this.hotelId = data.hotelId;
      this.hotelName = data.hotelName;
      this.city = data.city;
      this.firstDate = data.firstDate;
      this.secDate = data.secDate;
      this.timeHotel = data.time;
      this.priceHotel = data.price;
    });

  }

}
