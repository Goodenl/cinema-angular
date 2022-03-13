import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../../interfaces/ICinema'

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.sass']
})
export class CinemaCardComponent implements OnInit {
	@Input() cinema!: Cinema;

  constructor() { }

  ngOnInit(): void {
  }

}
