import { Component, OnInit } from '@angular/core';

import { Navigation } from "../../interfaces/INavigation"

@Component({
  selector: 'app-cinema-header',
  templateUrl: './cinema-header.component.html',
  styleUrls: ['./cinema-header.component.sass']
})
export class CinemaHeaderComponent implements OnInit {

	navList: Array<Navigation> = [
		{title: "Home", link: "/"},
		{title: "Pricing", link: "/pricing"},
		{title: "Favorites", link: "/favorites"},
		{title: "About", link: "/about"},
	]
  
  constructor() { }

  ngOnInit(): void {}

}
