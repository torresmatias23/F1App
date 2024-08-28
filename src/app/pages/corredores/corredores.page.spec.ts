import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorredoresPage } from './corredores.page';

describe('CorredoresPage', () => {
  let component: CorredoresPage;
  let fixture: ComponentFixture<CorredoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorredoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
