import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoAutorizacionComponent } from './editar-tipo-autorizacion.component';

describe('EditarTipoAutorizacionComponent', () => {
  let component: EditarTipoAutorizacionComponent;
  let fixture: ComponentFixture<EditarTipoAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTipoAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
