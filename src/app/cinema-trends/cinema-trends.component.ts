import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow } from 'swiper';

import { DomSanitizer } from '@angular/platform-browser';
import { Trend } from "@/interfaces/ITrend"

SwiperCore.use([EffectCoverflow])

@Component({
  selector: 'app-cinema-trends',
  templateUrl: './cinema-trends.component.html',
  styleUrls: ['./cinema-trends.component.sass']
})
export class CinemaTrendsComponent implements OnInit {
	swiperConfig: any = {

	  centeredSlides: true,

		effect: 'coverflow',
	  coverflowEffect: {
      rotate: 0,
      stretch: -24,
      depth: 200,
      scale: 1,
      slideShadows: false
    },
		// using "ratio" endpoints
	  breakpoints: {
	  	'@0.25': {
	      slidesPerView: 1.4,
	      spaceBetween: 24,
	    },
	    '@0.75': {
	      slidesPerView: 2.4,
	      spaceBetween: 24,
	    },
	    '@1.00': {
	      slidesPerView: 3.4,
	      spaceBetween: 40,
	      effect: 'none',
	      centeredSlides: false,
	    },
	    '@1.50': {
	      slidesPerView: 3.4,
	      spaceBetween: 50,
	      effect: 'none',
	      centeredSlides: false,
	    },
	  }
	}

	trendList: Trend[] = [
		{ title: "Batman: Archame", rating: "7.4", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/slide.png") },
		{ title: "Avengers: Endgame", rating: "9.4", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/slide.png") },
		{ title: "Smurfic", rating: "10.0", srcPreview: this.sanitizer.bypassSecurityTrustResourceUrl("/assets/img/slide.png") },
	]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {}

}
