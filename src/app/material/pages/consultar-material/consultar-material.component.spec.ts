import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMaterialComponent } from './consultar-material.component';

describe('ConsultarMaterialComponent', () => {
  let component: ConsultarMaterialComponent;
  let fixture: ComponentFixture<ConsultarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
