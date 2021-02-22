import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegioService extends GenericService<Object>{

  constructor(
    private http: HttpClient
  ) {
    super(http, 'privilegio');
  }
}
