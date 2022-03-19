import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { Navigation } from '@/interfaces/INavigation'

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cinema-footer',
  templateUrl: './cinema-footer.component.html',
  styleUrls: ['./cinema-footer.component.sass']
})
export class CinemaFooterComponent implements AfterViewInit {
  navList!: Navigation[];
  currentPath: string = new URL(document.URL).pathname

  @ViewChildren('navItem') navItems: any;
  
  constructor(private sanitizer: DomSanitizer ) {
    this.navList = [
      {src: sanitizer.bypassSecurityTrustResourceUrl('/assets/img/nav/home.svg'), link: '/'},
      {src: sanitizer.bypassSecurityTrustResourceUrl('/assets/img/nav/discover.svg'), link: '/discover'},
      {src: sanitizer.bypassSecurityTrustResourceUrl('/assets/img/nav/profile.svg'), link: '/profile'},
    ];
  }

  ngAfterViewInit(): void {
    const currentNavItem = this.navItems.toArray()
                            .find((r: any) => r.nativeElement.hasAttribute('firstItem'))

                            
    setTimeout(() => {
      const needSVGPath = currentNavItem.nativeElement.contentDocument.querySelector('.main-changes')
      this.setNavItem(this.navList[0], needSVGPath)
    }, 2000)
  }

  private setNavItem(navItem: Navigation, element: any) {
    for (let el of this.navItems) {
      const svgPathEl = el.nativeElement.contentDocument.firstChild.querySelector('.main-changes')
      if (svgPathEl) {
        svgPathEl.style.fill = '#fff'
        svgPathEl.style.fillOpacity = `0.2`
      }
    }

    element.style.fill = `url(#${element.dataset.colorId})`
    element.style.fillOpacity = `1`
  }

  selectNavItem(event: any, navItem: Navigation) {
    
    const iframe = event.currentTarget.querySelector("iframe.nav__icon")
    const needSVGPath = iframe.contentDocument.querySelector('.main-changes')

    this.setNavItem(navItem, needSVGPath)
    
  }
}
