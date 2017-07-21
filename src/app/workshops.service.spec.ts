import { TestBed, inject } from '@angular/core/testing';

import { WorkshopsService } from './workshops.service';

describe('WorkshopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkshopsService]
    });
  });

  it('should be created', inject([WorkshopsService], (service: WorkshopsService) => {
    expect(service).toBeTruthy();
  }));
});
