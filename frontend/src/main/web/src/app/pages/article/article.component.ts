import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleTitle = [
    {title: 'dia-de-muertos'},
    {title: '5-kawiarni-amsterdam'},
    {title: 'lodowce-islandia'}
  ];

  amsterdamHeader = 'Top 5 kawiarni w Amsterdamie';
  amsterdamSec = 'Amsterdamskie kawiarnie to dużo więcej niż tylko smaczna kawa. ' +
    'To także porządna dawka holenderskiej kultury i sposobu życia. Od tradycyjnych Koffiehuis po przytulne ' +
    '"brązowe kafejki" - tutaj znajdziesz odpowiednie miejsce od napicia się kawy na każdą okazję. Sprawdź gdzie ' +
    'znaleźć najlepsze kawiarnie i bary w Amsterdamie!';

  mexicoHeader = 'Dia de muertos w Meksyku';
  mexicoSec = 'Cukrowe czaszki, tańczące kościotrupy, kostucha w sombrero. ' +
    'Meksykanie śmieją się śmierci w twarz, a śmierć uśmiecha się do nich. Zwłaszcza w czasie Día de Muertos.';

  icelandHeader = 'Lodowce na Islandii';
  icelandSec = 'Islandia jest znana jako “kraj ognia i lodu”. To określenie ma swoje źródło w wielu lodowcach i' +
    ' wulkanach, które znajdują się na wyspie. Ile lodowców jest na Islandii? I czym właściwie jest lodowiec?';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.articleTitle = params['articleTitle'];
    });
  }

  ngOnInit() {
  }

}
