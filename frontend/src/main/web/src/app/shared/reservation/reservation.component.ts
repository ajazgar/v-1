import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  providers: [ResultTableService]
})
export class ReservationComponent implements OnInit {

  flights: Array<any>;

  constructor(private resultTableService: ResultTableService) { }

  ngOnInit() {
    this.resultTableService.getFlight().subscribe(data => {
      this.flights = data;
    });

  }

}
