import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecozinheiroComponent } from './homecozinheiro.component';

describe('HomecozinheiroComponent', () => {
  let component: HomecozinheiroComponent;
  let fixture: ComponentFixture<HomecozinheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecozinheiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecozinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
