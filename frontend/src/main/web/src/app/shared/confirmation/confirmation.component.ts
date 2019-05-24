import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [ResultTableService]
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

  discountPrice: string;

  constructor(private resultsService: ResultTableService, private route: ActivatedRoute) {
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
    this.calculateDiscount();
  }

  calculateDiscount() {
    this.discountPrice = Math.floor(this.price/100 * 20).toFixed(2);
    console.log(this.discountPrice);
  }

}
