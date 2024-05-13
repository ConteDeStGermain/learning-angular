import { TestBed } from '@angular/core/testing';

import { UnsplashapiService } from './unsplashapi.service';

describe('UnsplashapiService', () => {
  let service: UnsplashapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
