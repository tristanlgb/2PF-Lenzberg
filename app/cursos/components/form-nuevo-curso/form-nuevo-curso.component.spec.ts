import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormNuevoCursoComponent } from './form-nuevo-curso.component';

describe('FormNuevoCursoComponent', () => {
  let component: FormNuevoCursoComponent;
  let fixture: ComponentFixture<FormNuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba si el formulario esta completo', () => {
    let formulario = component.formCursoNuevo;

    expect(formulario.valid).toBeTrue();
  });

  it('Los cursos se agregan correctamente a la lista', ()=>{
    const formCursoNuevo = component.formCursoNuevo;
    const titulo = formCursoNuevo.controls["titulo"];
    const modalidad = formCursoNuevo.controls["modalidad"];
    const duracion = formCursoNuevo.controls["duracion"];
    const cupo = formCursoNuevo.controls["cupo"];
    const profesor = formCursoNuevo.controls["profesor"];
    const clasesSemanales = formCursoNuevo.controls["clasesSemanales"];
    const fechaInicio = formCursoNuevo.controls["fechaInicio"];
    const fechaPrueba = new Date();

    titulo.setValue('Resonancia Margnetica');
    modalidad.setValue('Presencial');
    duracion.setValue('6 meses');
    cupo.setValue(true);
    profesor.setValue({  id: '1',
      nombre:'Gustavo Mosconi',
      curso: 'Resonancia Magnetica',
      correo: 'gmosconi@gmail.com'});
    clasesSemanales.setValue(2);
    fechaInicio.setValue(fechaPrueba);



    const boton = fixture.debugElement.query(By.css("#agregarCurso"));
    boton.nativeElement.click();

    fixture.detectChanges();
    const cursos = component.cursos;
    expect(cursos[cursos.length-1]).toEqual({
      id: "1",
      titulo: 'Resonancia Margnetica',
      modalidad: 'Presencial',
      duracion: '6 meses',
      cupo: true,
      profesor: {id: '1',
      nombre:'Gustavo Mosconi',
      curso: 'Resonancia Magnetica',
      correo: 'gmosconi@gmail.com'},
      clasesSemanales: 2,
      fechaInicio: fechaPrueba,

    });
  })
});

