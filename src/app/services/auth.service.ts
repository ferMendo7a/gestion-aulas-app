import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/domain/usuario/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;
  url = 'http://localhost:8080/login';

  constructor(
    private http: HttpClient
  ) {
    console.log("obteniendo token...");
    this.getToken();
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

  logout() {
    localStorage.removeItem('token');
  }

  isAutenticado(): boolean {
    if ( this.userToken.length < 2 ) {
      return false;
    } else {
      return true;
    }
  }

  setToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

}
