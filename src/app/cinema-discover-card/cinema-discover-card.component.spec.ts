import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaDiscoverCardComponent } from './cinema-discover-card.component';

describe('CinemaDiscoverCardComponent', () => {
  let component: CinemaDiscoverCardComponent;
  let fixture: ComponentFixture<CinemaDiscoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaDiscoverCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaDiscoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
