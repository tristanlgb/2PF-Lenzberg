import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/cursos';

export const loadStateFeatures = createAction(
  '[Listado de Cursos] Cargar cursos',
);

export const finishStateFeatures = createAction(
  '[Listado de Cursos] Cursos cargados',
  props<{ cursos: Curso[] }>()
);

export const agregarCursoState = createAction(
  '[Listado de Cursos] Agregando curso',
  props<{ curso: Curso }>()
);


export const editarCursoState = createAction(
  '[Listado de Cursos] Editando curso',
  props<{ curso: Curso }>()
);

export const eliminarCursoState = createAction(
  '[Listado de Cursos] Curso eliminado',
  props<{ curso: Curso }>()
);


