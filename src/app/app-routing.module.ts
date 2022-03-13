import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaListComponent } from './cinema-list/cinema-list.component';

const routes: Routes = [
	{path: '', component: CinemaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
