import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraApsComponent } from './bitacora-aps.component';

describe('BitacoraApsComponent', () => {
  let component: BitacoraApsComponent;
  let fixture: ComponentFixture<BitacoraApsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraApsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraApsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
