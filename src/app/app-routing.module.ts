import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';
import { CinemaDiscoverComponent } from './cinema-discover/cinema-discover.component';

const routes: Routes = [
	{path: '', component: CinemaHomeComponent},
	{path: 'detail/:id', component: CinemaPageComponent},
	{path: 'discover', component: CinemaDiscoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
