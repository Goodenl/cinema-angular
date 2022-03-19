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
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: true, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
		{title: "Soul", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/cinema-discover-card-img.png"), small: false, year: "2020"},
	]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
