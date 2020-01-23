import { TestBed } from '@angular/core/testing';

import { RegistroPagoService } from './registro-pago.service';

describe('RegistroPagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroPagoService = TestBed.get(RegistroPagoService);
    expect(service).toBeTruthy();
  });
});
