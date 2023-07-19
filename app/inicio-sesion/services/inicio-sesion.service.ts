import { Injectable } from '@angular/core';
import { LoguinService } from 'src/app/inicio-sesion/services/loguin.service';
import { User } from '../../models/user';
import { Sesion } from '../../models/sesion';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class InicioSesionService {

  constructor(
    private sesionService:LoguinService,
    private http: HttpClient) {}

  iniciarSesion(user:User): Observable<Sesion>{
 return this.http.get<User[]>(`${environment.authURL}/users`).pipe(
  map((usuarios: User[]) => {
    let userValid = usuarios.find((u: User) => u.usuario === user.usuario && u.contraseña === user.contraseña); // valido credenciales con find

    if(userValid){
      const sesion: Sesion = {
        sesionActiva: true,
        usuarioActivo: userValid,
        actividad: true
      }

      return sesion
    }else{
      const sesion: Sesion = {
        sesionActiva: false,
        actividad: false
      }

      return sesion
    }
  })
);

  }
}





