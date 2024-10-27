import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDebitComponent } from './card-debit.component';

describe('CardDebitComponent', () => {
  let component: CardDebitComponent;
  let fixture: ComponentFixture<CardDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDebitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
