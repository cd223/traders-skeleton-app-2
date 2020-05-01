import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraderComponent } from './new-trader.component';

describe('NewTraderComponent', () => {
  let component: NewTraderComponent;
  let fixture: ComponentFixture<NewTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
