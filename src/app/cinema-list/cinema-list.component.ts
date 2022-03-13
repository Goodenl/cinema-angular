import { Component, OnInit } from '@angular/core';

import { Cinema } from '../../interfaces/ICinema'

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.sass']
})
export class CinemaListComponent implements OnInit {

	cinemaList: Cinema[] = [
		{
			title: "Batman",
			description: "Batman film Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo pariatur voluptatem, libero, officiis, impedit ducimus unde vero officia delectus beatae, nisi id perspiciatis provident vel nobis sed doloribus. Voluptate autem vitae animi iusto accusamus consequuntur magni nesciunt illum perspiciatis, quaerat numquam repellat vero ipsa ea magnam. Ipsa suscipit est sapiente?",
			genres: ['action', 'drama']
		},
		{
			title: "Superman",
			description: "Superman film Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo pariatur voluptatem, libero, officiis, impedit ducimus unde vero officia delectus beatae, nisi id perspiciatis provident vel nobis sed doloribus. Voluptate autem vitae animi iusto accusamus consequuntur magni nesciunt illum perspiciatis, quaerat numquam repellat vero ipsa ea magnam. Ipsa suscipit est sapiente?",
			genres: ['action', 'drama']
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
