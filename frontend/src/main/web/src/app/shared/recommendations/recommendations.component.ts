import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  @Input() city: string;
  @Input() country: string;
  @Input() inspiration: string;

  countries = [
    {country: 'japonia'},
    {country: 'uk'},
    {country: 'islandia'}
  ];


  id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.countries = params['countries'];
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
