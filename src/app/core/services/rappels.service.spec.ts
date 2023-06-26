import { TestBed } from '@angular/core/testing';

import { RappelsService } from './rappels.service';

describe('RappelsService', () => {
  let service: RappelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
