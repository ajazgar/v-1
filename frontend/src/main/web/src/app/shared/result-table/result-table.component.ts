import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
  providers: [ResultTableService]
})
export class ResultTableComponent implements OnInit {


  countries = [
    {country: 'japonia'},
    {country: 'uk'},
    {country: 'islandia'}
  ];


  flights: Array<any>;
  id: number;
  // departureCity: string;
  // arrivalCity: string;
  // departureDate: string;
  // arrivalDate: string;
  // flightClass: string;
  // time: string;
  // price: number;

  constructor(private resultTableService: ResultTableService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.countries = params['countries'];
      this.id = params['id'];
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.resultTableService.getFlightById(this.id).subscribe(data => {
      this.id = data.flightId;
      // this.departureCity = data.departureCity;
      // this.arrivalCity = data.arrivalCity;
      // this.departureDate = data.departureDate;
      // this.arrivalDate = data.arrivalDate;
      // this.flightClass = data.flightClass;
      // this.time = data.time;
      // this.price = data.price;
      this.flights = data;
    });

    console.log(this.id);
  }

}
