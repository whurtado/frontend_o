import { TestBed } from '@angular/core/testing';

import { OrdenServicioService } from './orden-servicio.service';

describe('OrdenServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenServicioService = TestBed.get(OrdenServicioService);
    expect(service).toBeTruthy();
  });
});
