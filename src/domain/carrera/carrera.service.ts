import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Carrera } from './carrera.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarreraService  extends GenericService<Carrera>{

  constructor(
    private http: HttpClient
  ) {
    super(http, 'carrera');
  }

}
