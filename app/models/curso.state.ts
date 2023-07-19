import { Curso } from "../models/cursos";

export interface CursoState{
    loadind: boolean;
    cursos: Curso[];
}
