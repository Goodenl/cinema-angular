import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCreative } from 'swiper';

SwiperCore.use([EffectCreative])

@Component({
  selector: 'app-cinema-trends',
  templateUrl: './cinema-trends.component.html',
  styleUrls: ['./cinema-trends.component.sass']
})
export class CinemaTrendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
