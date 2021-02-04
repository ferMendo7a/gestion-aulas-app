import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

import { HttpClient } from '@angular/common/http';
import { Seccion } from './seccion.model';

@Injectable({
  providedIn: 'root'
})
export class SeccionService extends GenericService<Seccion>{

  constructor(
    private http: HttpClient
  ) {
    super(http, 'seccion');
  }
}
