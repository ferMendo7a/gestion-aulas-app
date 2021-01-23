import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {

  token: string;
  url = 'http://localhost:8080';
  headers: HttpHeaders;

  httpClient: HttpClient;

  constructor(httpClient: HttpClient, endpoint: string) {
    this.httpClient = httpClient;
    this.url = `${this.url}/${endpoint}/`;
    this.getToken();
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
    return this.token;
  }

  save(obj: T): Observable<T> {
    let headers = this.headers;
    return this.httpClient.post<T>(this.url, obj, { headers });
  }

  fetch() {
    let headers = this.headers;
    return this.httpClient.get(this.url, { headers });
  }

  getById(id: number) {
    let headers = this.headers;
    return this.httpClient.get(this.url + id, { headers });
  }

}
