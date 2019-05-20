import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {Flight} from "../../models/flight.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  providers: [ResultTableService]
})
export class ReservationComponent implements OnInit {

  flights: Object;
  id: number;

  constructor(private resultTableService: ResultTableService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });

  }

  ngOnInit() {
    this.resultTableService.getFlightById(this.id).subscribe(data => {
      this.id = data.flightId;
      console.log(this.id);
    });


  }

}
