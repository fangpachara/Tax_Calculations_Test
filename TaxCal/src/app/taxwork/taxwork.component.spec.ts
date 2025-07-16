import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxworkComponent } from './taxwork.component';

describe('TaxworkComponent', () => {
  let component: TaxworkComponent;
  let fixture: ComponentFixture<TaxworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
