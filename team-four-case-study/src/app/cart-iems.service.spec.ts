import { TestBed } from '@angular/core/testing';

import { CartIemsService } from './services/cart-iems.service';

describe('CartIemsService', () => {
  let service: CartIemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartIemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
