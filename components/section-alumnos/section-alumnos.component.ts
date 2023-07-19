import { Component, OnInit } from '@angular/core';
import {Alumno} from 'src/app/models/alumnos';

import {ServiceAlumnoService} from 'src/app/services/service-alumno.service';



@Component({
  selector: 'app-section-alumnos',
  templateUrl: './section-alumnos.component.html',
  styleUrls: ['./section-alumnos.component.css']
})
export class SectionAlumnosComponent implements OnInit{

  listaAlumnos!:Alumno[];



  constructor(
    private servicesDeAlumnos:ServiceAlumnoService,

  ){}

  ngOnInit(): void {
  this.listaAlumnos= this.servicesDeAlumnos.obtenerAlumno()

  }




}

