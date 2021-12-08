import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosPageComponent } from './pedidos-page.component';

describe('PedidosPageComponent', () => {
  let component: PedidosPageComponent;
  let fixture: ComponentFixture<PedidosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
