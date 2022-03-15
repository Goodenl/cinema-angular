import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaDiscoverComponent } from './cinema-discover.component';

describe('CinemaDiscoverComponent', () => {
  let component: CinemaDiscoverComponent;
  let fixture: ComponentFixture<CinemaDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
