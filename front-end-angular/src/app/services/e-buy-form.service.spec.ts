import { TestBed } from '@angular/core/testing';

import { EBuyFormService } from './e-buy-form.service';

describe('EBuyFormService', () => {
  let service: EBuyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EBuyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
