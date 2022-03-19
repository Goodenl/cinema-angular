import { Component, OnInit, Input } from '@angular/core';

import { DiscoverCard } from "@/interfaces/IDiscoverCard"

@Component({
  selector: 'app-cinema-discover-card',
  templateUrl: './cinema-discover-card.component.html',
  styleUrls: ['./cinema-discover-card.component.sass']
})
export class CinemaDiscoverCardComponent implements OnInit {

	@Input() discoverCard!: DiscoverCard;

  constructor() { }

  ngOnInit(): void {
  }

}
