import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultareceitaComponent } from './consultareceita.component';

describe('ConsultareceitaComponent', () => {
  let component: ConsultareceitaComponent;
  let fixture: ComponentFixture<ConsultareceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultareceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultareceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
