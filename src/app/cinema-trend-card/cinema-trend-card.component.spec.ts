import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaTrendCardComponent } from './cinema-trend-card.component';

describe('CinemaTrendCardComponent', () => {
  let component: CinemaTrendCardComponent;
  let fixture: ComponentFixture<CinemaTrendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaTrendCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaTrendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
