import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaDiscoverCardsComponent } from './cinema-discover-cards.component';

describe('CinemaDiscoverCardsComponent', () => {
  let component: CinemaDiscoverCardsComponent;
  let fixture: ComponentFixture<CinemaDiscoverCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaDiscoverCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaDiscoverCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
