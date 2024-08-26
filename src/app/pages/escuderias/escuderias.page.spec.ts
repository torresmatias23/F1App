import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscuderiasPage } from './escuderias.page';

describe('EscuderiasPage', () => {
  let component: EscuderiasPage;
  let fixture: ComponentFixture<EscuderiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuderiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
