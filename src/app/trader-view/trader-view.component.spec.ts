import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderViewComponent } from './trader-view.component';

describe('TraderViewComponent', () => {
  let component: TraderViewComponent;
  let fixture: ComponentFixture<TraderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
