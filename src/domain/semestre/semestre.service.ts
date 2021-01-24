import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { Semestre } from './semestre.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemestreService extends GenericService<Semestre>{

  constructor(
    private http: HttpClient
  ) {
    super(http, 'semestre');
  }
}
