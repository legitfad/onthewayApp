import { TestBed } from '@angular/core/testing';

import { FirebaseOrderService } from './firebase-order.service';

describe('FirebaseOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseOrderService = TestBed.get(FirebaseOrderService);
    expect(service).toBeTruthy();
  });
});
