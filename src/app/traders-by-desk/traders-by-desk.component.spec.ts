import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradersByDeskComponent } from './traders-by-desk.component';

describe('TradersByDeskComponent', () => {
  let component: TradersByDeskComponent;
  let fixture: ComponentFixture<TradersByDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradersByDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradersByDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
