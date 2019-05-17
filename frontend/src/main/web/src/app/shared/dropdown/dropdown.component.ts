import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ResultTableService} from "../services/result-table.service";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [ResultTableService]
})
export class DropdownComponent implements OnInit {

  dropdownOpened: boolean;
  flights: Array<any>;

  constructor(private resultTableService: ResultTableService, private el: ElementRef) { }

  ngOnInit() {
    this.resultTableService.getFlight().subscribe(data => {
      this.flights = data;
    });
  }

  @HostListener('document:mousedown', ['$event.target']) onDocumentClicked(target) {
    if(target && !this.el.nativeElement.contains(target)){
      this.dropdownOpened = false;
    }
  }

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }



}
