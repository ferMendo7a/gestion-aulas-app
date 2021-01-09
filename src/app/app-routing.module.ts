import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../domain/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'usuario', loadChildren:'../domain/usuario/usuario.module#UsuarioModule', canActivate: [ AuthGuard ] },
  { path: 'aula', loadChildren:'../domain/aula/aula.module#AulaModule', canActivate: [ AuthGuard ] },
  { path: 'carrera', loadChildren:'../domain/carrera/carrera.module#CarreraModule', canActivate: [ AuthGuard ] },
  { path: 'materia', loadChildren:'../domain/materia/materia.module#MateriaModule', canActivate: [ AuthGuard ] },
  { path: 'distribucion', loadChildren:'../domain/distribucion/distribucion.module#DistribucionModule', canActivate: [ AuthGuard ] },
  { path: 'login', loadChildren:'../domain/login/login.module#LoginModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }