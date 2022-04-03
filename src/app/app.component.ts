import { Component } from '@angular/core';
import {Event, RouterEvent, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'cinema-angular';
  showFooter: boolean = true;

  constructor(private router: Router) {

  	const detailUrlRegExp = new RegExp(/\/detail\/.*/);

    router.events.pipe(
       filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
    	if (detailUrlRegExp.test(e.url)) {
    		this.showFooter = false;
    	} else {
    		this.showFooter = true;
    	}
    });
  }
}
