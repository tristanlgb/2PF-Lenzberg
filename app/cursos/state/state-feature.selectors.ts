import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStateFeature from './state-feature.reducer';

export const selectFeatureState = createFeatureSelector<fromStateFeature.CursoState>(
  fromStateFeature.stateFeatureFeatureKey
);

export const selectorCargandoCursos = createSelector(
  selectFeatureState,
  (state:fromStateFeature.CursoState)=>{return state.loadind}
);
export const selectorCursosCargados = createSelector(
  selectFeatureState,
  (state:fromStateFeature.CursoState)=>{return state.cursos}
)

