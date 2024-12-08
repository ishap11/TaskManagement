import { TestBed } from '@angular/core/testing';

import { AllSettingsServiceService } from './all-settings-service.service';

describe('AllSettingsServiceService', () => {
  let service: AllSettingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSettingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
