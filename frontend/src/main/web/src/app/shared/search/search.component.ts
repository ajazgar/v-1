import {Component, ElementRef, OnInit} from '@angular/core';
import {ResultTableService} from "../services/result-table.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ResultTableService]
})
export class SearchComponent implements OnInit {

  flights: Array<any>;
  isFlightChosen: number;
  disableButton: boolean = true;


  constructor(private resultTableService: ResultTableService, private el: ElementRef) { }


  ngOnInit() {
    this.resultTableService.getFlight().subscribe(data => {
      this.flights = data;
    },
      error => console.log(error));
  }

  chooseFlight(index) {
    this.isFlightChosen = index;
    this.disableButton = false;
  }


}
