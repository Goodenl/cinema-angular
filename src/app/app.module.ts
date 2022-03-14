import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaHeaderComponent } from './cinema-header/cinema-header.component';
import { CinemaFooterComponent } from './cinema-footer/cinema-footer.component';
import { CinemaCardComponent } from './cinema-card/cinema-card.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CinemaContiniueWatchComponent } from './cinema-continiue-watch/cinema-continiue-watch.component';
import { CinemaTrendsComponent } from './cinema-trends/cinema-trends.component';
import { CinemaTrendCardComponent } from './cinema-trend-card/cinema-trend-card.component';
import { CinemaGenresComponent } from './cinema-genres/cinema-genres.component';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent,
    CinemaHeaderComponent,
    CinemaFooterComponent,
    CinemaCardComponent,
    CinemaPageComponent,
    CinemaContiniueWatchComponent,
    CinemaTrendsComponent,
    CinemaTrendCardComponent,
    CinemaGenresComponent,
    CinemaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
