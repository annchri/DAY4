import { TestBed } from '@angular/core/testing';

import { heroservice } from './hero.service';

describe('HeroService', () => {
  let service: heroservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(heroservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
