import { Component, OnInit, Input } from '@angular/core';
import { Trend } from "@/interfaces/ITrend"

@Component({
  selector: 'app-cinema-trend-card',
  templateUrl: './cinema-trend-card.component.html',
  styleUrls: ['./cinema-trend-card.component.sass']
})
export class CinemaTrendCardComponent implements OnInit {

	@Input() trend!: Trend;

  constructor() { }

  ngOnInit(): void {
  }

}
