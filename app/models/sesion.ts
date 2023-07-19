import { User } from "./user";

export interface Sesion {
  sesionActiva: boolean,
  usuarioActivo?: User,
  actividad: boolean
}
