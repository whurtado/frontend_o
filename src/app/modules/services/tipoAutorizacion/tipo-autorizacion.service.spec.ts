import { TestBed } from '@angular/core/testing';

import { TipoAutorizacionService } from './tipo-autorizacion.service';

describe('TipoAutorizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoAutorizacionService = TestBed.get(TipoAutorizacionService);
    expect(service).toBeTruthy();
  });
});
