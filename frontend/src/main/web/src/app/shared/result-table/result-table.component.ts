import { Component, OnInit } from '@angular/core';
import {ResultTableService} from "../services/result-table.service";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
  providers: [ResultTableService]
})
export class ResultTableComponent implements OnInit {

  flights: Array<any>;

  constructor(private resultTableService: ResultTableService) { }

  ngOnInit() {
    this.resultTableService.getFlight().subscribe(data => {
      this.flights = data;
    },
      error => console.log(error));
  }

}
