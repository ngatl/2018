import { TestBed, inject } from '@angular/core/testing';

import { SpeakersService } from './speakers.service';

describe('SpeakersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakersService]
    });
  });

  it('should be created', inject([SpeakersService], (service: SpeakersService) => {
    expect(service).toBeTruthy();
  }));
});
