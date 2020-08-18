import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Materia } from './materia.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriaService extends GenericService<Materia>{

  constructor(
    private http: HttpClient
  ) {
    super(http, 'materia');
  }

}
