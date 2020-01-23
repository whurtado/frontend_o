import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutorizacionComponent } from './listar-autorizacion.component';

describe('ListarAutorizacionComponent', () => {
  let component: ListarAutorizacionComponent;
  let fixture: ComponentFixture<ListarAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
