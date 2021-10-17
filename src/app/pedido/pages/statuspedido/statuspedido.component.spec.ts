import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspedidoComponent } from './statuspedido.component';

describe('StatuspedidoComponent', () => {
  let component: StatuspedidoComponent;
  let fixture: ComponentFixture<StatuspedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuspedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuspedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
