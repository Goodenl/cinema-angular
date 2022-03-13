import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaHeaderComponent } from './cinema-header/cinema-header.component';
import { CinemaFooterComponent } from './cinema-footer/cinema-footer.component';
import { CinemaCardComponent } from './cinema-card/cinema-card.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent,
    CinemaHeaderComponent,
    CinemaFooterComponent,
    CinemaCardComponent,
    CinemaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
