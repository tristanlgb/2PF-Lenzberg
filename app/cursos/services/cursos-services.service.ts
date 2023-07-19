import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { environment } from 'src/environment/environment'

@Injectable()
export class CursosServicesService {

constructor(
  private http: HttpClient
){}


obtenerCursos(): Observable<Curso[]>{
  return this.http.get<Curso[]>(`${environment.apiURL}/cursos`);
};

agregarCurso(curso: Curso):Observable<Curso>  {
  return this.http.post<Curso>(`${environment.apiURL}/cursos`,curso)
 };

deleteCurso(curso: Curso): Observable<Curso> {
  return this.http.delete<Curso>(`${environment.apiURL}/cursos/${curso.id}`)
};

editarCurso(curso: Curso): Observable<Curso> {
  return this.http.put<Curso>(`${environment.apiURL}/cursos/${curso.id}`, curso)
};


}
