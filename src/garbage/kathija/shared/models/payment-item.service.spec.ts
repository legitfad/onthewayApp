import { TestBed } from '@angular/core/testing';

import { PaymentItemService } from './payment-item.service';

describe('PaymentItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentItemService = TestBed.get(PaymentItemService);
    expect(service).toBeTruthy();
  });
});
