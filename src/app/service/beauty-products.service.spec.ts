import { TestBed } from '@angular/core/testing';

import { BeautyProductsService } from './beauty-products.service';

describe('BeautyProductsService', () => {
  let service: BeautyProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautyProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
