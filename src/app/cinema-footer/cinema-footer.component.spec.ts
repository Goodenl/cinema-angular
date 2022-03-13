import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaFooterComponent } from './cinema-footer.component';

describe('CinemaFooterComponent', () => {
  let component: CinemaFooterComponent;
  let fixture: ComponentFixture<CinemaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
