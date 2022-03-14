import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaContiniueWatchComponent } from './cinema-continiue-watch.component';

describe('CinemaContiniueWatchComponent', () => {
  let component: CinemaContiniueWatchComponent;
  let fixture: ComponentFixture<CinemaContiniueWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaContiniueWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaContiniueWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
