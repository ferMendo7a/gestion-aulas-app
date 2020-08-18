import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Distribucion } from './distribucion.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistribucionService extends GenericService<Distribucion>{

  constructor(
    private http: HttpClient
  ) {
    super(http, 'distribucion');
  }

}