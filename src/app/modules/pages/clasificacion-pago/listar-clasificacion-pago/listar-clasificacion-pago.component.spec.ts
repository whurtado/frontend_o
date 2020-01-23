import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClasificacionPagoComponent } from './listar-clasificacion-pago.component';

describe('ListarClasificacionPagoComponent', () => {
  let component: ListarClasificacionPagoComponent;
  let fixture: ComponentFixture<ListarClasificacionPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClasificacionPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClasificacionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
