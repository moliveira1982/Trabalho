import { TestBed, inject } from '@angular/core/testing';

import { CrudPromocoesService } from './crud-promocoes.service';

describe('CrudPromocoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudPromocoesService]
    });
  });

  it('should ...', inject([CrudPromocoesService], (service: CrudPromocoesService) => {
    expect(service).toBeTruthy();
  }));
});
