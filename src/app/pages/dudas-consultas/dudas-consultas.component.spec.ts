import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudasConsultasComponent } from './dudas-consultas.component';

describe('DudasConsultasComponent', () => {
  let component: DudasConsultasComponent;
  let fixture: ComponentFixture<DudasConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudasConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DudasConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
