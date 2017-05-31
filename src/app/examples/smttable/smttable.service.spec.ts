import { TestBed, inject } from '@angular/core/testing';

import { SmttableService } from './smttable.service';

describe('SmttableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmttableService]
    });
  });

  it('should be created', inject([SmttableService], (service: SmttableService) => {
    expect(service).toBeTruthy();
  }));
});
