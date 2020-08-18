
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DistribucionListComponent } from './distribucion-list/distribucion-list.component';
import { DistribucionRoutingModule } from './distribucion-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
  DistribucionListComponent],
  imports: [ 
    DistribucionRoutingModule,
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: []
})
export class DistribucionModule { }
