import { TestBed } from '@angular/core/testing';

import { EuropCarUiService } from './europ-car-ui.service';

describe('EuropCarUiService', () => {
  let service: EuropCarUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuropCarUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
