import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutorizacionComponent } from './editar-autorizacion.component';

describe('EditarAutorizacionComponent', () => {
  let component: EditarAutorizacionComponent;
  let fixture: ComponentFixture<EditarAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
