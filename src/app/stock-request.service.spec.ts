import { TestBed } from '@angular/core/testing';

import { StockRequestService } from './stock-request.service';

describe('StockRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockRequestService = TestBed.get(StockRequestService);
    expect(service).toBeTruthy();
  });
});
