import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenServicioComponent } from './orden-servicio.component';

describe('OrdenServicioComponent', () => {
  let component: OrdenServicioComponent;
  let fixture: ComponentFixture<OrdenServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
