import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../domain/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuario', loadChildren:'../domain/usuario/usuario.module#UsuarioModule' },
  { path: 'aula', loadChildren:'../domain/aula/aula.module#AulaModule' },
  { path: 'carrera', loadChildren:'../domain/carrera/carrera.module#CarreraModule' },
  { path: 'materia', loadChildren:'../domain/materia/materia.module#MateriaModule' },
  { path: 'distribucion', loadChildren:'../domain/distribucion/distribucion.module#DistribucionModule' },
  { path: 'login', loadChildren:'../domain/login/login.module#LoginModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }