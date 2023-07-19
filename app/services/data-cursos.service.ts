 import { Curso } from 'src/app/models/cursos';

 export const cursos = {

   obtenerCursos: () => {
     return [
       { titulo: "curso 1",
       modalidad: "Teórico Presencial - Práctico",
       duracion: "7 meses",
       cupo: true,
       profesor:{
         nombre: 'juan pepe',
         curso: 'curso 1',
         correo: 'curso1@gmail.com'
       },
       clasesSemanales: 2,
       fechaInicio: new Date (2023, 2, 6, 20, 0, 0)
     },

       { titulo: "curso 2",
       modalidad: "Teórico Presencial - Práctico",
       duracion: "5 meses",
       cupo: true,
       profesor:{
         nombre: 'juana pepa',
         curso: 'curso 2',         correo: 'curso2@gmail.com'
      },
       clasesSemanales: 1,      fechaInicio: new Date (2023, 2, 15, 17, 30, 0)
    },
       { titulo: "curso 3",
       modalidad: "Teórico Presencial",
       duracion: "3 meses",
       cupo: true,
       profesor:{
        nombre: 'juanito pepito',
       curso: 'curso 3',
        correo: 'curso3@gmail.com'
       },
      clasesSemanales: 1,
       fechaInicio: new Date (2023, 3, 10, 19, 0, 0)
     }
       ];
 },
 agregarCurso: (curso: Curso) => {
   console.log('Agregando curso desde curso.data.ts');
 }
 }

