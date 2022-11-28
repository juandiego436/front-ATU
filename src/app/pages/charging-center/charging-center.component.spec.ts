import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingCenterComponent } from './charging-center.component';

describe('ChargingCenterComponent', () => {
  let component: ChargingCenterComponent;
  let fixture: ComponentFixture<ChargingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
