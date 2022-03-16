import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaGenreComponent } from './cinema-genre.component';

describe('CinemaGenreComponent', () => {
  let component: CinemaGenreComponent;
  let fixture: ComponentFixture<CinemaGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
