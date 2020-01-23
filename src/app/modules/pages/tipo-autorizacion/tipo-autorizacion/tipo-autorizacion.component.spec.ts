import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAutorizacionComponent } from './tipo-autorizacion.component';

describe('TipoAutorizacionComponent', () => {
  let component: TipoAutorizacionComponent;
  let fixture: ComponentFixture<TipoAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
