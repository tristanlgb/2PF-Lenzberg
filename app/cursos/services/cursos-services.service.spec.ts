import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosServicesService } from './cursos-services.service';
import { Curso } from 'src/app/models/cursos';
import { of } from 'rxjs';

describe('CursosServicesService', () => {
  let service: CursosServicesService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosServicesService (httpClientSpy as any);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("el servicio devuelve los valores de mockapi correctamente", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Curso[] = [
      {
       "titulo": "Colonoscopia",
       "modalidad": "virtual",
       "duracion": "3 meses",
       "cupo": true,
       "profesor": {
        "nombre": "Johnny Durgan",
        "curso": "Ut maxime doloremque laboriosam magni repellat saepe sequi iure a. Alias commodi ut alias beatae sequi. Molestias minus provident aspernatur molestias.\nFacilis laboriosam nostrum magnam eos. Voluptates laboriosam vero dolore. Sapiente praesentium qui magnam mollitia sequi cum fugiat aliquam. Animi accusamus blanditiis quisquam odit a impedit aspernatur sit. A dicta corrupti dolorem ratione dolor in.\nDolor quas laudantium accusamus iusto. Cupiditate consequatur suscipit distinctio temporibus. Atque fugiat corrupti magni. Officiis eligendi assumenda illo.",
        "correo": "Fredrick.Kuvalis@hotmail.com",
        "id": "1"
       },
       "clasesSemanales": 2,
       "fechaInicio": fechaPrueba,
       "id": "10"
      },
      {
       "titulo": "Mamografia Contrastada",
       "modalidad": "virtual",
       "duracion": "1 mes",
       "cupo": true,
       "profesor": {
        "nombre": "Johnny Durgan",
        "curso": "Ut maxime doloremque laboriosam magni repellat saepe sequi iure a. Alias commodi ut alias beatae sequi. Molestias minus provident aspernatur molestias.\nFacilis laboriosam nostrum magnam eos. Voluptates laboriosam vero dolore. Sapiente praesentium qui magnam mollitia sequi cum fugiat aliquam. Animi accusamus blanditiis quisquam odit a impedit aspernatur sit. A dicta corrupti dolorem ratione dolor in.\nDolor quas laudantium accusamus iusto. Cupiditate consequatur suscipit distinctio temporibus. Atque fugiat corrupti magni. Officiis eligendi assumenda illo.",
        "correo": "Fredrick.Kuvalis@hotmail.com",
        "id": "1"
       },
       "clasesSemanales": 1,
       "fechaInicio": fechaPrueba,
       "id": "11"
      },
      {
       "titulo": "titulo 12",
       "modalidad": "modalidad 12",
       "duracion": "duracion 12",
       "cupo": false,
       "profesor": {
        "nombre": "Johnny Durgan",
        "curso": "Ut maxime doloremque laboriosam magni repellat saepe sequi iure a. Alias commodi ut alias beatae sequi. Molestias minus provident aspernatur molestias.\nFacilis laboriosam nostrum magnam eos. Voluptates laboriosam vero dolore. Sapiente praesentium qui magnam mollitia sequi cum fugiat aliquam. Animi accusamus blanditiis quisquam odit a impedit aspernatur sit. A dicta corrupti dolorem ratione dolor in.\nDolor quas laudantium accusamus iusto. Cupiditate consequatur suscipit distinctio temporibus. Atque fugiat corrupti magni. Officiis eligendi assumenda illo.",
        "correo": "Fredrick.Kuvalis@hotmail.com",
        "id": "1"
       },
       "clasesSemanales": 81,
       "fechaInicio":fechaPrueba,
       "id": "12"
      },
      {
       "titulo": "titulo 13",
       "modalidad": "modalidad 13",
       "duracion": "duracion 13",
       "cupo": false,
       "profesor": {
        "nombre": "Johnny Durgan",
        "curso": "Ut maxime doloremque laboriosam magni repellat saepe sequi iure a. Alias commodi ut alias beatae sequi. Molestias minus provident aspernatur molestias.\nFacilis laboriosam nostrum magnam eos. Voluptates laboriosam vero dolore. Sapiente praesentium qui magnam mollitia sequi cum fugiat aliquam. Animi accusamus blanditiis quisquam odit a impedit aspernatur sit. A dicta corrupti dolorem ratione dolor in.\nDolor quas laudantium accusamus iusto. Cupiditate consequatur suscipit distinctio temporibus. Atque fugiat corrupti magni. Officiis eligendi assumenda illo.",
        "correo": "Fredrick.Kuvalis@hotmail.com",
        "id": "1"
       },
       "clasesSemanales": 52,
       "fechaInicio": fechaPrueba,
       "id": "13"
      }
     ];


  httpClientSpy.get.and.returnValue(of(mockDatos));
  service.obtenerCursos().subscribe((cursos: Curso[]) => {
    expect(cursos).toEqual(mockDatos);
    done();
  });
})
});
