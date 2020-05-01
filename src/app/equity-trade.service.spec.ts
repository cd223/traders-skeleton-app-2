import { TestBed } from '@angular/core/testing';

import { EquityTradeService } from './equity-trade.service';

describe('EquityTradeService', () => {
  let service: EquityTradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquityTradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
