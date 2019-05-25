import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../services/car.service";
import {HotelsService} from "../services/hotels.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [ResultTableService, ResultTableService, CarService, HotelsService]
})
export class ConfirmationComponent implements OnInit {

  departureCity: string;
  id: number;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  time: string;
  price: number;

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

  discountPrice: string;

  constructor(private resultsService: ResultTableService,
              private route: ActivatedRoute,
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
    this.calculateDiscount();
  }

  calculateDiscount() {
    this.discountPrice = Math.floor(this.price/100 * 20).toFixed(2);
    console.log(this.discountPrice);
  }

}
