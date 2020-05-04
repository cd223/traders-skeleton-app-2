import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTradeViewComponent } from './equity-trade-view.component';

describe('EquityTradeViewComponent', () => {
  let component: EquityTradeViewComponent;
  let fixture: ComponentFixture<EquityTradeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityTradeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityTradeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
