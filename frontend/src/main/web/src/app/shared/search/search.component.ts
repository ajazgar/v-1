import {Component, OnInit} from '@angular/core';
import {ResultTableService} from "../services/result-table.service";
import {Flight} from "../../models/flight.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ResultTableService]
})
export class SearchComponent implements OnInit {

  isFlightChosen: number;
  disableButton: boolean = true;

  filteredFlights: Flight[];
  flights: Flight[];

  private _searchText: string = "";

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
    this.filteredFlights= this.filterFlights(value);
  }


  // ActivatedRoute is a service, which keeps track of the currently activated route associated with the loaded Component.

  constructor(private resultTableService: ResultTableService) { }


  ngOnInit() {
    this.resultTableService.getFlight().subscribe(data => {
      this.flights = data;
        this.filteredFlights = this.flights;
    },
      error => console.log(error));
  }

  filterFlights(searchString: string) {
    return this.flights.filter(flight => flight.arrivalCity.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  chooseFlight(index) {
    this.isFlightChosen = index;
    this.disableButton = false;
    console.log(this.isFlightChosen);
  }


}
