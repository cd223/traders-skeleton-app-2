import { TestBed } from '@angular/core/testing';

import { ZoneWatcherService } from './zone-watcher.service';

describe('ZoneWatcherService', () => {
  let service: ZoneWatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneWatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
