import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../../models/cursos';
import { Observable, Subscription } from 'rxjs';
import { CursosServicesService } from '../../services/cursos-services.service';
import { Router } from '@angular/router';
import { LoguinService } from 'src/app/inicio-sesion/services/loguin.service';
import { Sesion } from '../../../models/sesion';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { MatDialog } from '@angular/material/dialog';
import { CursoState } from '../../state/state-feature.reducer';
import { Store } from '@ngrx/store';
import { eliminarCursoState, loadStateFeatures } from '../../state/state-feature.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectorCargandoCursos } from '../../state/state-feature.selectors';


@Component({
  selector: 'app-section-cursos',
  templateUrl: './section-cursos.component.html',
  styleUrls: ['./section-cursos.component.css']
})
export class SectionCursosComponent implements OnInit, OnDestroy{

      suscript!: Subscription;
      dataSource!: MatTableDataSource <Curso>;
      columnas: string[] = ['titulo', 'modalidad', 'duracion', 'cupo', 'profesor', 'clasesSemanales','fechaInicio','acciones'];
      curso!: Curso[];
      cursos$!:Observable<Curso[]>;
      sesion$!: Observable<Sesion>;
      loadind$!: Observable<Boolean>;




      constructor(
        private servicesDeCursos:CursosServicesService,
        private router: Router,
        private sesionService: LoguinService,
        private dialog: MatDialog,
        private store: Store<CursoState>,
        private snackBar: MatSnackBar
      ){}


      ngOnInit(): void {
        this.cursos$ = this.servicesDeCursos.obtenerCursos();
        this.sesion$ = this.sesionService.obtenerSesion();
        this.loadind$ =this.store.select(selectorCargandoCursos);
        this.store.dispatch(loadStateFeatures());


        this.dataSource = new MatTableDataSource<Curso>();
        this.suscript = this.servicesDeCursos.obtenerCursos().subscribe((cursos: Curso[]) => {
          this.dataSource.data = cursos;
        });
      }
      ngOnDestroy(){
        this.suscript.unsubscribe();
      }


      goEdit(curso:Curso){
        this.dialog.open(EditarCursoComponent, {
          data: curso
        }).afterClosed().subscribe((curso: Curso) => {
          this.cursos$ = this.servicesDeCursos.obtenerCursos();
        });
      };

      deleteCurso(curso:Curso) {
            this.store.dispatch(eliminarCursoState({ curso }));
      }
    }

