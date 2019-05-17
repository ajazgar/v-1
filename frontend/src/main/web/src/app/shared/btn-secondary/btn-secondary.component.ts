import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-secondary',
  templateUrl: './btn-secondary.component.html',
  styleUrls: ['./btn-secondary.component.scss']
})
export class BtnSecondaryComponent implements OnInit {

  @Input() buttonSecondaryText: string;

  constructor() { }

  ngOnInit() {
  }

}
