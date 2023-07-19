import { TestBed } from '@angular/core/testing';
import { InicioSesionService } from './inicio-sesion.service';
import { LoguinService } from './loguin.service';
import { RouterModule } from '@angular/router';

describe('InicioSesionService', () => {
  let service: InicioSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoguinService],
      imports:[RouterModule]
    });
    service = TestBed.inject(InicioSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
