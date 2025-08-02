import { TestBed } from '@angular/core/testing';

import { PartesInteressadasService } from './partes-interessadas.service';

describe('PartesInteressadasService', () => {
  let service: PartesInteressadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartesInteressadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
