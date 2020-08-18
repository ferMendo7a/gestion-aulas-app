import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaListComponent } from './aula-list/aula-list.component';
import { AulaEditComponent } from './aula-edit/aula-edit.component';


const routes: Routes = [
  { path: '', component: AulaListComponent },
  { path: 'nuevo', component: AulaEditComponent },
  { path: ':id', component: AulaEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
