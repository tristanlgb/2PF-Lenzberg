import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class LoguinService {

  sesion$: BehaviorSubject<Sesion>;

  constructor() {
    let sesion:Sesion = {
      sesionActiva: false,
      actividad:true
    };
    this.sesion$ =new BehaviorSubject<Sesion>(sesion)
   }

   obtenerSesion(): Observable<Sesion>{
   return this.sesion$.asObservable();
   }

   crearSesion(sesion:Sesion){
    console.log ('Sesion Nueva creada', sesion);
    this.sesion$.next(sesion);
   }

   cerrarSesion(sesion: Sesion){
    this.sesion$.next(sesion);
  }
}
