import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { CursosServicesService } from '../services/cursos-services.service';
import { agregarCursoState, editarCursoState, eliminarCursoState, finishStateFeatures, loadStateFeatures } from '../state/state-feature.actions';
import { Curso } from '../../models/cursos';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class StateFeatureCursosEffects {
  cargaCursos$ = createEffect(()=>{       //filtra la accion de load
    return this.actions$.pipe(
      ofType(loadStateFeatures),
      concatMap(()=>{
        return this.cursos.obtenerCursos().pipe(            //llama a obtener cursos y hace dispach de los cursos cargados
          map((curso: Curso[])=> finishStateFeatures ({cursos: curso}))
        )
      })
    )
  });
  agregarCurso$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(agregarCursoState),
      concatMap(({curso})=>{
        return this.cursos.agregarCurso(curso).pipe(  //se incorpora en mockapi
          map((curso:Curso)=>{
            this.snackBar.open(`${curso.titulo} agregado satisfactoriamente`,'', {duration: 2000})
            setTimeout(() => {
              this.router.navigate(['formacion/cards']);
            }, 2000);
            return loadStateFeatures();
            })
        )
      })
    )
  });

  editarCurso$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(editarCursoState),
      concatMap(({ curso })=>{
return this.cursos.editarCurso(curso).pipe(
  map((curso: Curso)=>{
    this.snackBar.open(`${curso.titulo} editado satisfactoriamente`,'', {duration: 2000})
    this.router.navigate(['formacion/tabla-de-cursos']);
    return loadStateFeatures()
  })
)
      })
    )
  });

   eliminarCurso$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(eliminarCursoState),
      concatMap(({ curso })=>{
        return this.cursos.deleteCurso(curso).pipe(
          map((curso: Curso)=>{
            this.snackBar.open(`${curso.titulo} eliminado satisfactoriamente`,'', {duration: 2000});
            setTimeout(() => {
              this.router.navigate(['formacion/cards']);
            }, 2000);
            return loadStateFeatures();

          })
        )
      })

    )
   });

constructor(
  private cursos: CursosServicesService,
  private actions$: Actions,
  private router: Router,
  private snackBar: MatSnackBar
){}


}
