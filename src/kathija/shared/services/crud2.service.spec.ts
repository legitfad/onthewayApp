import { TestBed } from '@angular/core/testing';

import { Crud2Service } from './crud2.service';

describe('Crud2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Crud2Service = TestBed.get(Crud2Service);
    expect(service).toBeTruthy();
  });
});
