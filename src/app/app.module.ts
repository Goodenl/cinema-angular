import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaFooterComponent } from './cinema-footer/cinema-footer.component';
import { CinemaPageComponent } from './cinema-page/cinema-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CinemaContiniueWatchComponent } from './cinema-continiue-watch/cinema-continiue-watch.component';
import { CinemaTrendsComponent } from './cinema-trends/cinema-trends.component';
import { CinemaTrendCardComponent } from './cinema-trend-card/cinema-trend-card.component';
import { CinemaGenresComponent } from './cinema-genres/cinema-genres.component';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { CinemaDiscoverComponent } from './cinema-discover/cinema-discover.component';
import { CinemaSearchComponent } from './cinema-search/cinema-search.component';
import { CinemaGenreComponent } from './cinema-genre/cinema-genre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import { CinemaDiscoverCardsComponent } from './cinema-discover-cards/cinema-discover-cards.component';
import { CinemaDiscoverCardComponent } from './cinema-discover-card/cinema-discover-card.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CinemaFooterComponent,
    CinemaPageComponent,
    CinemaContiniueWatchComponent,
    CinemaTrendsComponent,
    CinemaTrendCardComponent,
    CinemaGenresComponent,
    CinemaHomeComponent,
    CinemaDiscoverComponent,
    CinemaSearchComponent,
    CinemaGenreComponent,
    CinemaDiscoverCardsComponent,
    CinemaDiscoverCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgxMasonryModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
