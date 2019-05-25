import { Component, OnInit } from '@angular/core';
import {CarService} from "../../shared/services/car.service";
import {Car} from "../../models/car.model";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {

  cars: Car[];
  filteredCars: Car[];

  isCarChosen: number;
  disableButton: boolean = true;

  private _searchText: string = "";

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
    this.filteredCars= this.filterCars(value);
  }

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
      this.filteredCars = this.cars;
    });
  }

  filterCars(searchString: string) {
    return this.cars.filter(car => car.place.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  chooseCar(index) {
    this.isCarChosen = index;
    this.disableButton = false;
  }
}
