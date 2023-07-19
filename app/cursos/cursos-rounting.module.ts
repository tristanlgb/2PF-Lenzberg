import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionGuard } from '../guards/sesion.guard';
import { cardsComponent } from './components/cards/cards.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { FormNuevoCursoComponent } from './components/form-nuevo-curso/form-nuevo-curso.component';
import { SectionCursosComponent } from './components/section-cursos/section-cursos.component';
import { AdminGuard } from '../guards/admin.guard';
import { CursosServicesService } from './services/cursos-services.service';




const routes: Routes = [
  { path:'', canActivateChild: [SesionGuard] ,children: [
    { path: 'enseña-con-nosotros', component:  FormNuevoCursoComponent, canActivate: [AdminGuard] },
    { path: 'tabla-de-cursos', component: SectionCursosComponent, canActivate: [AdminGuard]},
    { path: 'editar', component: EditarCursoComponent, canActivate: [AdminGuard] },
    { path: 'cards', component: cardsComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CursosServicesService],
})
export class CursosRountingModule { }
