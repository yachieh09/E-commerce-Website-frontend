import { TestBed } from '@angular/core/testing';

import { YayShopFormService } from './yay-shop-form.service';

describe('YayShopFormService', () => {
  let service: YayShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YayShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
