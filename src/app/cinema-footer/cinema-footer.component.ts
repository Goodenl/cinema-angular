import { Component, OnInit } from '@angular/core';
import { Navigation } from '@/interfaces/INavigation'

@Component({
  selector: 'app-cinema-footer',
  templateUrl: './cinema-footer.component.html',
  styleUrls: ['./cinema-footer.component.sass']
})
export class CinemaFooterComponent implements OnInit {

	navList: Navigation[] = [
		{src: '/assets/img/nav/home.svg', link: '/'},
		{src: '/assets/img/nav/discover.svg', link: '/discover'},
		{src: '/assets/img/nav/profile.svg', link: '/profile'},
	];

  constructor() { }

  ngOnInit(): void {
  }

}
