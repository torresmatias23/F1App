import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCorredorPage } from './detalle-corredor.page';

describe('DetalleCorredorPage', () => {
  let component: DetalleCorredorPage;
  let fixture: ComponentFixture<DetalleCorredorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCorredorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
