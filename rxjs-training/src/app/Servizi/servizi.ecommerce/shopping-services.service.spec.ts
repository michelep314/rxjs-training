import { TestBed } from '@angular/core/testing';

import { ShoppingSrvService } from './shopping-services.service';

describe('ShoppingServicesService', () => {
  let service: ShoppingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
