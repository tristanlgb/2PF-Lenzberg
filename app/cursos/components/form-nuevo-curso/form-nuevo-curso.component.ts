import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { Profesor } from 'src/app/models/profesores';
import { ProfesorServiceService } from '../../services/profesor-service.service';
import { Store } from '@ngrx/store';
import { CursoState } from '../../state/state-feature.reducer';
import { agregarCursoState } from '../../state/state-feature.actions';

@Component({
  selector: 'app-form-nuevo-curso',
  templateUrl: './form-nuevo-curso.component.html',
  styleUrls: ['./form-nuevo-curso.component.css']
})
export class FormNuevoCursoComponent implements OnInit {

formCursoNuevo!: FormGroup;
spanCongratulations!: string;
profesor$!: Observable<Profesor[]>;
cursos!: Curso[]



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private profesores: ProfesorServiceService,
    private store: Store <CursoState>
  ){}


  ngOnInit(): void {
    this.profesor$ = this.profesores.obtenerProfesor();
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.formCursoNuevo = new FormGroup({
        titulo: new FormControl('',[Validators.required]),
        modalidad: new FormControl('',[Validators.required]),
        duracion: new FormControl('',[Validators.required]),
        cupo: new FormControl(false, [Validators.required]),
        profesor: new FormControl({}, [Validators.required]),
        clasesSemanales: new FormControl('', [Validators.required]),
        fechaInicio: new FormControl('', [Validators.required]),
      })
    })

  }
  agregarCurso(){
    let cursoNuevo: Curso = {
      id: '',
      titulo: this.formCursoNuevo.value.titulo,
      modalidad: this.formCursoNuevo.value.modalidad,
      duracion: this.formCursoNuevo.value.duracion,
      cupo:this.formCursoNuevo.value.cupo,
      profesor:this.formCursoNuevo.value.profesor,
      clasesSemanales:this.formCursoNuevo.value.clasesSemanales,
      fechaInicio:this.formCursoNuevo.value.fechaInicio,
  }

  this.store.dispatch(agregarCursoState({curso: cursoNuevo}));
  }


}

