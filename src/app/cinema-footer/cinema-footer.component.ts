import { Component, OnInit } from '@angular/core';
import { Navigation } from '@/interfaces/INavigation'

import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-footer',
  templateUrl: './cinema-footer.component.html',
  styleUrls: ['./cinema-footer.component.sass']
})
export class CinemaFooterComponent implements OnInit {
  navList!: Navigation[];
  
  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.navList = [
      {src: sanitizer.bypassSecurityTrustResourceUrl('/assets/img/nav/home.svg'), link: '/'},
      {src: sanitizer.bypassSecurityTrustResourceUrl('/assets/img/nav/discover.svg'), link: '/discover'},
      {src: sanitizer.bypassSecurityTrustResourceUrl('/assets/img/nav/profile.svg'), link: '/profile'},
    ];
  }

  ngOnInit(): void {
  }
}
