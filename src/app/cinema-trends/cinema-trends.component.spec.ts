import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaTrendsComponent } from './cinema-trends.component';

describe('CinemaTrendsComponent', () => {
  let component: CinemaTrendsComponent;
  let fixture: ComponentFixture<CinemaTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
