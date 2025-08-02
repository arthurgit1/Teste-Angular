import { TestBed } from '@angular/core/testing';

import { DatajudService } from './datajud.service';

describe('DatajudService', () => {
  let service: DatajudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatajudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
