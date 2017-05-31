import { TestBed, inject } from '@angular/core/testing';

import { AplicaDescontosService } from './aplica-descontos.service';

describe('AplicaDescontosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AplicaDescontosService]
    });
  });

  it('should ...', inject([AplicaDescontosService], (service: AplicaDescontosService) => {
    expect(service).toBeTruthy();
  }));
});
