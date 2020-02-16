import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenServicioComponent } from './listar-orden-servicio.component';

describe('ListarOrdenServicioComponent', () => {
  let component: ListarOrdenServicioComponent;
  let fixture: ComponentFixture<ListarOrdenServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrdenServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
