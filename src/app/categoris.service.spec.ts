import { TestBed, inject } from '@angular/core/testing';

import { CategorisService } from './categoris.service';

describe('CategorisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorisService]
    });
  });

  it('should be created', inject([CategorisService], (service: CategorisService) => {
    expect(service).toBeTruthy();
  }));
});
