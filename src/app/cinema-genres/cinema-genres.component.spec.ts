import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaGenresComponent } from './cinema-genres.component';

describe('CinemaGenresComponent', () => {
  let component: CinemaGenresComponent;
  let fixture: ComponentFixture<CinemaGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
