import { Profesor } from './profesores';


export interface Curso {
  id: string;
  titulo: string;
  modalidad: string;
  duracion: string;
  cupo: boolean;
  profesor: Profesor,
  clasesSemanales: number,
  fechaInicio:Date,
}
