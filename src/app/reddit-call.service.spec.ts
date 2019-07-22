import { TestBed } from '@angular/core/testing';

import { RedditCallService } from './reddit-call.service';

describe('RedditCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditCallService = TestBed.get(RedditCallService);
    expect(service).toBeTruthy();
  });
});
