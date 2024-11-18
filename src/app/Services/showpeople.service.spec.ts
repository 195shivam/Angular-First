import { TestBed } from '@angular/core/testing';

import { ShowpeopleService } from './showpeople.service';

describe('ShowpeopleService', () => {
  let service: ShowpeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowpeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
