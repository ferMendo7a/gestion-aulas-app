import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Aula } from './aula.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AulaService extends GenericService<Aula>{

    constructor(
      private http: HttpClient
    ) {
      super(http, 'aula');
    }
  
  }
  