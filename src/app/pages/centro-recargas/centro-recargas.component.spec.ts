import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroRecargasComponent } from './centro-recargas.component';

describe('CentroRecargasComponent', () => {
  let component: CentroRecargasComponent;
  let fixture: ComponentFixture<CentroRecargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroRecargasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
