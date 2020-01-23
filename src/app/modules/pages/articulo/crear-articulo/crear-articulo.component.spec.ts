import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticuloComponent } from './crear-articulo.component';

describe('CrearArticuloComponent', () => {
  let component: CrearArticuloComponent;
  let fixture: ComponentFixture<CrearArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
