import { createFeature, createReducer, on } from '@ngrx/store';
import * as StateFeatureActions from './state-feature.actions';
import { Curso } from 'src/app/models/cursos';


export const stateFeatureFeatureKey = 'cursoState';

export interface CursoState {
  loadind: boolean;
  cursos: Curso[];
}

export const initialState: CursoState = {
  loadind: false,
  cursos: []
};

export const reducer = createReducer(
  initialState,
  on(StateFeatureActions.loadStateFeatures, (state) => {
    const newState: CursoState = {
      loadind: true,
      cursos: []
    }
    return newState;
  }),
  on (StateFeatureActions.finishStateFeatures,(state, {cursos})=> {
    return {...state, loadind: false, cursos: cursos}
  }),

   // 2 maneras distintas de hacer las declaraciones, mismo resultado

on (StateFeatureActions.agregarCursoState,(state, {curso: Curso})=> {
      return state;
}),
on (StateFeatureActions.editarCursoState,(state, {curso: Curso})=> {
  return state;
}),
on (StateFeatureActions.eliminarCursoState,(state, {curso: Curso})=> {
  return state;
})
)


