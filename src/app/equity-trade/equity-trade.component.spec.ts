import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTradeComponent } from './equity-trade.component';

describe('EquityTradeComponent', () => {
  let component: EquityTradeComponent;
  let fixture: ComponentFixture<EquityTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
