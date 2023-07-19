import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../../../models/cursos';
import { Subscription, Observable } from 'rxjs';
import { LoguinService } from 'src/app/inicio-sesion/services/loguin.service';
import { Sesion } from 'src/app/models/sesion';
import { selectorCursosCargados, selectorCargandoCursos } from '../../state/state-feature.selectors';
import { loadStateFeatures } from '../../state/state-feature.actions';
import { Store } from '@ngrx/store';
import { CursoState } from '../../state/state-feature.reducer';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class cardsComponent implements OnInit{

  cursos!:Curso[];
  suscript!: Subscription;
  cursos$!:Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  loadind$!: Observable<Boolean>;

  constructor(
    private sesionService: LoguinService,
    private store: Store<CursoState>

  ){}



ngOnInit(): void {
  this.loadind$ =this.store.select(selectorCargandoCursos); //cargo el spiner
  this.store.dispatch(loadStateFeatures()); // actualizo mi cursoState
this.sesion$ = this.sesionService.obtenerSesion();
this.cursos$= this.store.select(selectorCursosCargados);

}
}



