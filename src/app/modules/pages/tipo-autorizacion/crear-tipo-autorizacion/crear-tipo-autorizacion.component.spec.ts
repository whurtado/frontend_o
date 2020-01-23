import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoAutorizacionComponent } from './crear-tipo-autorizacion.component';

describe('CrearTipoAutorizacionComponent', () => {
  let component: CrearTipoAutorizacionComponent;
  let fixture: ComponentFixture<CrearTipoAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipoAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
