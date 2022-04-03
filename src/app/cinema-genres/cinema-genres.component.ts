import { Component, OnInit } from '@angular/core';
import { IGenre } from "@/interfaces/IGenre"

@Component({
  selector: 'app-cinema-genres',
  templateUrl: './cinema-genres.component.html',
  styleUrls: ['./cinema-genres.component.sass']
})
export class CinemaGenresComponent implements OnInit {

	genres: IGenre[] = [
		{title: "Comedy", selected: false},
		{title: "Horror", selected: false},
		{title: "Triller", selected: false},
		{title: "Drama", selected: false},
	]

  constructor() { }

  ngOnInit(): void {
  }

  selectGenre(genre: IGenre): void {
  	this.genres.map(genre => genre.selected = false)
  	genre.selected = true
  }

}
