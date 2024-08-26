import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEscuderiaPage } from './detalle-escuderia.page';

describe('DetalleEscuderiaPage', () => {
  let component: DetalleEscuderiaPage;
  let fixture: ComponentFixture<DetalleEscuderiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEscuderiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
