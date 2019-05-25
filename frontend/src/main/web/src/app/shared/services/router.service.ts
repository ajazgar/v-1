import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Injectable()
export class RouterService {

  previousUrl: string = 'none';

  constructor(private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.previousUrl = event.url;
        }
      });
  }
}
