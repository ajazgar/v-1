import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() btnText: string;
  @Input() isBtnDisabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
