import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadpedidoComponent } from './cadpedido.component';

describe('CadpedidoComponent', () => {
  let component: CadpedidoComponent;
  let fixture: ComponentFixture<CadpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
