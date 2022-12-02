import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTarifarioComponent } from './control-tarifario.component';

describe('ControlTarifarioComponent', () => {
  let component: ControlTarifarioComponent;
  let fixture: ComponentFixture<ControlTarifarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlTarifarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlTarifarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
