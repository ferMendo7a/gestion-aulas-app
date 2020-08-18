import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from '../generic.service';
import { Usuario } from './usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario> {
  
  constructor(
    private http: HttpClient
  ) {
    super(http, 'usuario')
  }
  
}
