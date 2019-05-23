import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  amsterdamHeader = 'Top 5 kawiarni w Amsterdamie';
  amsterdamSec = 'Amsterdamskie kawiarnie to dużo więcej niż tylko smaczna kawa. ' +
    'To także porządna dawka holenderskiej kultury i sposobu życia. Od tradycyjnych Koffiehuis po przytulne ' +
    '"brązowe kafejki" - tutaj znajdziesz odpowiednie miejsce od napicia się kawy na każdą okazję. Sprawdź gdzie ' +
    'znaleźć najlepsze kawiarnie i bary w Amsterdamie!';

  constructor() { }

  ngOnInit() {
  }

}
