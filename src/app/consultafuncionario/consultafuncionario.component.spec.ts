import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultafuncionarioComponent } from './consultafuncionario.component';

describe('ConsultafuncionarioComponent', () => {
  let component: ConsultafuncionarioComponent;
  let fixture: ComponentFixture<ConsultafuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultafuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultafuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
