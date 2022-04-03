import { Component, OnInit, Input } from '@angular/core';
import { IGenre } from "@/interfaces/IGenre"

@Component({
  selector: 'app-cinema-genre',
  templateUrl: './cinema-genre.component.html',
  styleUrls: ['./cinema-genre.component.sass']
})
export class CinemaGenreComponent implements OnInit {

	@Input() item!: IGenre;

  constructor() {}

  ngOnInit(): void {}

}
