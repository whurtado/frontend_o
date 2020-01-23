import { TestBed } from '@angular/core/testing';

import { ClasificacionPagoService } from './clasificacion-pago.service';

describe('ClasificacionPagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasificacionPagoService = TestBed.get(ClasificacionPagoService);
    expect(service).toBeTruthy();
  });
});
