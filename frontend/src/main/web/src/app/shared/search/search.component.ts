import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ResultTableService]
})
export class SearchComponent implements OnInit {

  isOneWay: boolean;
  isTwoWays: boolean;

  isInputClicked: boolean;
  isArrivalClicked: boolean;
  isCalendarClicked: boolean;

  flights: Array<any>;

  constructor(private resultTableService: ResultTableService, private el: ElementRef) { }


  ngOnInit() {
    this.isTwoWays = true;


    this.resultTableService.getFlight().subscribe(data => {
      this.flights = data;
    },
      error => console.log(error));
  }

  @HostListener('document:mousedown', ['$event.target']) onDocumentClicked(target) {
    if(target && !this.el.nativeElement.contains(target)){
      this.isInputClicked = false;
      this.isArrivalClicked = false;
      this.isCalendarClicked = false;
    }
  }

  checkOneWay() {
    this.isOneWay = true;
    this.isTwoWays = false;
  }

  checkTwoWays() {
    this.isOneWay = false;
    this.isTwoWays = true;
  }

}
