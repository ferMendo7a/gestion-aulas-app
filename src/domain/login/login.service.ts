import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {

  }

  login(usuario: Usuario) {
    return this.http.post(this.url, usuario)
      .pipe(
        map( data => {
          this.setToken( data['token'] );
          return data;
        })
      )  
    ;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

}
