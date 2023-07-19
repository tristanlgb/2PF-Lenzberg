import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { Profesor } from 'src/app/models/profesores';
import { CursosServicesService } from '../../services/cursos-services.service';
import { ProfesorServiceService } from '../../services/profesor-service.service';
import { Store } from '@ngrx/store';
import { CursoState } from '../../state/state-feature.reducer';
import { editarCursoState } from '../../state/state-feature.actions';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  formulario!: FormGroup;
  profesor$!: Observable<Profesor[]>;


  constructor(
    private servicesDeCursos: CursosServicesService,
    private store: Store <CursoState>,
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    private profesores: ProfesorServiceService,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ){}

ngOnInit(): void {
this.profesor$= this.profesores.obtenerProfesor();
    this.formulario = new FormGroup({
      id: new FormControl (this.curso.id),
      titulo: new FormControl(this.curso.titulo),
      modalidad: new FormControl(this.curso.modalidad),
      duracion: new FormControl(this.curso.duracion),
      cupo: new FormControl(this.curso.cupo),
      profesor: new FormControl(this.curso.profesor),
      clasesSemanales: new FormControl(this.curso.clasesSemanales),
      fechaInicio: new FormControl(this.curso.fechaInicio),
    });

  }


editarCurso(){
  let curso: Curso = {
      id: this.formulario.value.id ,
      titulo: this.formulario.value.titulo,
      modalidad: this.formulario.value.modalidad,
      duracion: this.formulario.value.duracion,
      cupo:this.formulario.value.cupo,
      profesor: this.formulario.value.profesor,
      clasesSemanales:this.formulario.value.clasesSemanales,
      fechaInicio:this.formulario.value.fechaInicio,
  };

  this.store.dispatch(editarCursoState( { curso }));
  this.servicesDeCursos.editarCurso(curso).subscribe((curso:Curso)=>{
  this.dialogRef.close(curso);});

}
}



