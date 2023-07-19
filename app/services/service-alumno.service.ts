import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class ServiceAlumnoService {

  listaAlumnos: Alumno[] = [
    {
      nombre: "juan",
      apellido: "pepe",
      matriculado: true,
      socio: true
    },
    {
      nombre: "juana",
      apellido: "pepa",
      matriculado: true,
      socio: true
    },
    {
      nombre: "carlos",
      apellido: "perez",
      matriculado: true,
      socio: false
    },
    {
      nombre: "carla",
      apellido: "pereza",
      matriculado: false,
      socio: true
    },
    {
      nombre: "ramon",
      apellido: "gonzalez",
      matriculado: true,
      socio: true
    },
    {
      nombre: "ramona",
      apellido: "gonzalaz",
      matriculado: false,
      socio: false
    }
  ];

  private alumno$!: BehaviorSubject<Alumno[]>;

  constructor() {}

  obtenerAlumno(): Array<Alumno>{
    return this.listaAlumnos;
  }


  obtenerAlumnoObservable(): Observable<Alumno[]>{

    return this.alumno$.asObservable();
  }


  agregarAlumno(alumno: Alumno){
    this.listaAlumnos.push(alumno)
  }




  }

