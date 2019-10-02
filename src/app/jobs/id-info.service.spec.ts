import { TestBed } from '@angular/core/testing';

import { IdInfoService } from './id-info.service';

describe('IdInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdInfoService = TestBed.get(IdInfoService);
    expect(service).toBeTruthy();
  });
});
