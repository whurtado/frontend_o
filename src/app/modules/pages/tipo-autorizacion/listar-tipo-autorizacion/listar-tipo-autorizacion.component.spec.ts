import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoAutorizacionComponent } from './listar-tipo-autorizacion.component';

describe('ListarTipoAutorizacionComponent', () => {
  let component: ListarTipoAutorizacionComponent;
  let fixture: ComponentFixture<ListarTipoAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipoAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
