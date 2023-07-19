import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AuthState } from './auth.reducer';

export const selectorAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectorSesionState = createSelector(
  selectorAuthState,
  //(state) => state.sesion
  (state: AuthState) => state.sesion
)

export const selectorSesionActiva = createSelector(
  selectorAuthState,
  (state) => state ? state.sesion.sesionActiva: false
);

export const selectorUsuarioActivo = createSelector(
  selectorAuthState,
  (state) => state.sesion.usuarioActivo
);
