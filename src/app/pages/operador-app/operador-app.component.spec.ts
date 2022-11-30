import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorAppComponent } from './operador-app.component';

describe('OperadorAppComponent', () => {
  let component: OperadorAppComponent;
  let fixture: ComponentFixture<OperadorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
