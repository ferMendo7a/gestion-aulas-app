import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaListComponent } from './materia-list/materia-list.component';
import { MateriaEditComponent } from './materia-edit/materia-edit.component';


const routes: Routes = [
  { path: '', component: MateriaListComponent },
  { path: 'nuevo', component: MateriaEditComponent },
  { path: ':id', component: MateriaEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaRoutingModule { }
