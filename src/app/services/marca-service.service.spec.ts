import { TestBed } from '@angular/core/testing';

import { MarcaServiceService } from './marca-service.service';

describe('MarcaServiceService', () => {
  let service: MarcaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
