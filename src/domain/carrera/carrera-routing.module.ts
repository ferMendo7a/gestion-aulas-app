import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraListComponent } from './carrera-list/carrera-list.component';

const routes: Routes = [
  { path: '', component: CarreraListComponent },
  { path: 'nuevo', component: CarreraEditComponent },
  { path: ':id', component: CarreraEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreraRoutingModule { }
