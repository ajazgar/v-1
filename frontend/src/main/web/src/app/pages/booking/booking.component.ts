import { Component, OnInit } from '@angular/core';
import {Passenger} from "../../models/passenger.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../shared/services/booking.service";
import {ResultTableService} from "../../shared/services/result-table.service";
import {HotelsService} from "../../shared/services/hotels.service";
import {CarService} from "../../shared/services/car.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [BookingService, ResultTableService, CarService, HotelsService]
})
export class BookingComponent implements OnInit {

  passenger: Passenger = new Passenger();

  //flights
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  time: string;
  price: number;
  id: number;

  //hotels
  hotelId: number;
  hotelName: string;
  city: string;
  firstDate: string;
  secDate: string;
  timeHotel: string;
  priceHotel: number;
  hotels;

  //cars
  carId: number;
  carBrand: string;
  place: string;
  description: string;
  receivingDate: string;
  returnDate: string;
  carPrice: number;


  public contentEditable = false;

  constructor(private route: ActivatedRoute,
              //private bookingService: BookingService,
              private resultsService: ResultTableService,
              private router: Router,
              private hotelService: HotelsService,
              private carService: CarService) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.hotelId = params['hotelId'];
      this.carId = params['carId'];
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

    this.hotelService.getHotelById(this.hotelId).subscribe(data => {
      this.hotelId = data.hotelId;
      this.hotelName = data.hotelName;
      this.city = data.city;
      this.firstDate = data.firstDate;
      this.secDate = data.secDate;
      this.timeHotel = data.time;
      this.priceHotel = data.price;
    });

    this.carService.getCarById(this.carId).subscribe(data => {
      this.carId = data.carId;
      this.carBrand = data.carBrand;
      this.place = data.place;
      this.description = data.description;
      this.receivingDate = data.receivingDate;
      this.returnDate = data.returnDate;
      this.carPrice = data.price;
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
