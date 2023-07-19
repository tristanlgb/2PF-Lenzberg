import { createAction, props } from '@ngrx/store';
import { Sesion } from '../../models/sesion';



export const loadSesion = createAction(
  '[Auth] Sesion cargada',
  props<{ sesion: Sesion }>()
);
