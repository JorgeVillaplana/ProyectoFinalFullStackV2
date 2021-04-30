import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourMakerComponent } from './tour-maker.component';

describe('TourMakerComponent', () => {
  let component: TourMakerComponent;
  let fixture: ComponentFixture<TourMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
