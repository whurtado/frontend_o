import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenServicioComponent } from './editar-orden-servicio.component';

describe('EditarOrdenServicioComponent', () => {
  let component: EditarOrdenServicioComponent;
  let fixture: ComponentFixture<EditarOrdenServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOrdenServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
