import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesores';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {

  constructor(
     private http: HttpClient
   ) { }

  obtenerProfesor(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${environment.apiURL}/profesor`)
  }
}
