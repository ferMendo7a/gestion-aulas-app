import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegioComponent } from './privilegio.component';

const routes: Routes = [
  { path: '', component: PrivilegioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivilegioRoutingModule { }
