import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTradeDetailViewComponent } from './equity-trade-detail-view.component';

describe('EquityTradeDetailViewComponent', () => {
  let component: EquityTradeDetailViewComponent;
  let fixture: ComponentFixture<EquityTradeDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityTradeDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityTradeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
