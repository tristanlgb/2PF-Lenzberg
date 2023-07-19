import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from './models/sesion';
import { AuthState } from './inicio-sesion/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectorSesionActiva, selectorUsuarioActivo } from './inicio-sesion/state/auth.selectors';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'course-project';
  sesionActiva$!: Observable<Boolean>
  usuarioActivo$!: Observable<User | undefined>

  constructor(
    private router: Router,
    private authStore: Store<AuthState>,

  ) { };

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectorSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectorUsuarioActivo);

  }

  irInicio() {
    this.router.navigate(['inicio'])

  }
  cerrarSesion() {
    let sesionCerrada: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined,
      actividad: true,
    }

    this.router.navigate(['inicio-sesion']);
  }
}


