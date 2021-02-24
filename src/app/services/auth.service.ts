import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/domain/usuario/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;
  urlBase = 'http://localhost:8080/';
  url = `${this.urlBase}login`;
  usuarioLoggedUrl = `${this.urlBase}usuario-conectado`;
  usuarioLogged: any;
  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.getToken();
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
/*    if (this.isAutenticado()) {
      this.getUsuarioLogged().subscribe(
        data => this.usuarioLogged = data
      )
    }*/
  }

  login(usuario: Usuario) {
    return this.http.post(this.url, usuario)
      .pipe(
        map( data => {
          this.setToken( data['token'], data['expiration'] );
          this.usuarioLogged = {};
          this.usuarioLogged.id = data['user-id'];
          this.usuarioLogged.username = data['user']['username'];
          localStorage.setItem('user', JSON.stringify(this.usuarioLogged));
          localStorage.setItem('privilegios', JSON.stringify(data['privilegios']));
          return data;
        })
      )
    ;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('privilegios');
    localStorage.removeItem('user');
  }

  isAutenticado(): boolean {
    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expiration = Number(this.getExpiration());
    const expirationDate = new Date();
    expirationDate.setTime(expiration);

    if (expirationDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

  setToken(token: string, expiration: string) {
    this.userToken = token;
    localStorage.setItem('token', token);

    let hoy = new Date();
    hoy.setMilliseconds(Number(expiration));
    localStorage.setItem('expiration', hoy.getTime().toString());
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  getExpiration() {
    return localStorage.getItem('expiration') || '';
  }

  getUsuarioLogged() {
    let headers = this.headers;
    return this.http.get(this.usuarioLoggedUrl, {headers})
  }

  getUsuarioConectado() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getPrivilegios() {
    const privilegios = JSON.parse(localStorage.getItem('privilegios'));
    return privilegios !== undefined && privilegios !== null && privilegios.length > 0 ? 
      privilegios.map(data => data.toLowerCase()) : [];
  }

}
