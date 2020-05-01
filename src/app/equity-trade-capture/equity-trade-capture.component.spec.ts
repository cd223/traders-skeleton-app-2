import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityTradeCaptureComponent } from './equity-trade-capture.component';

describe('EquityTradeCaptureComponent', () => {
  let component: EquityTradeCaptureComponent;
  let fixture: ComponentFixture<EquityTradeCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityTradeCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityTradeCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
