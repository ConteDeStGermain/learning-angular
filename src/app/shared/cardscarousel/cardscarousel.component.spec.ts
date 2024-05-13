import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscarouselComponent } from './cardscarousel.component';

describe('CardscarouselComponent', () => {
  let component: CardscarouselComponent;
  let fixture: ComponentFixture<CardscarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardscarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardscarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
