import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { DiscoverCard } from "@/interfaces/IDiscoverCard"

@Component({
  selector: 'app-cinema-discover-cards',
  templateUrl: './cinema-discover-cards.component.html',
  styleUrls: ['./cinema-discover-cards.component.sass']
})
export class CinemaDiscoverCardsComponent implements OnInit {

	discoverCards: DiscoverCard[] = [
		{id: 1, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{id: 2, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{id: 3, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{id: 4, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{id: 5, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{id: 6, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{id: 7, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{id: 8, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{id: 9, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{id: 10, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{id: 11, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{id: 12, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{id: 13, title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
	]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
