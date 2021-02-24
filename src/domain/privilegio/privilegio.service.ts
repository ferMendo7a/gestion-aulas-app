import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegioService extends GenericService<Object>{

  privilegios: any[];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    super(http, 'grupo');
  }

  puedeAccederUrl(url: string): boolean {
    url = url.split("/")[1];
    this.privilegios = this.authService.getPrivilegios().filter( ret => ret.includes(url));
    return this.privilegios !== undefined && this.privilegios.length > 0;
  }

}
