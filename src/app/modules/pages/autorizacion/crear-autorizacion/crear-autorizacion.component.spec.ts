import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAutorizacionComponent } from './crear-autorizacion.component';

describe('CrearAutorizacionComponent', () => {
  let component: CrearAutorizacionComponent;
  let fixture: ComponentFixture<CrearAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
