import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeatendenteComponent } from './homeatendente.component';

describe('HomeatendenteComponent', () => {
  let component: HomeatendenteComponent;
  let fixture: ComponentFixture<HomeatendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeatendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeatendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
