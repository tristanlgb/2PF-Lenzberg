import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProfesorServiceService } from './profesor-service.service';

describe('ProfesorServiceService', () => {
  let service: ProfesorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProfesorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
