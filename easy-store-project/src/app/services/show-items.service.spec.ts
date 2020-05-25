import { TestBed } from '@angular/core/testing';

import { ShowItemsService } from './show-items.service';

describe('ShowItemsService', () => {
  let service: ShowItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
