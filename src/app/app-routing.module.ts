import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';

const routes: Routes = [
	{path: '', component: CinemaListComponent},
	{path: '/detail/:id', component: CinemaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
