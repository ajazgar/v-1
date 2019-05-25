import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../../shared/services/result-table.service";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../shared/services/car.service";
import {Car} from "../../models/car.model";

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.scss'],
  providers: [CarService]
})
export class CarReservationComponent implements OnInit {

  id: number;
  cars: Car[];

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.carService.getCarById(this.id).subscribe(data => {
      this.id = data.id;
      this.cars = data;
    });
  }

}
