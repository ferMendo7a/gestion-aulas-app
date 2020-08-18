import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: LoginService) {
    this.usuario = new Usuario();
    this.usuario.username = 'admin';
    this.usuario.password = '12345';
  }

  ngOnInit() {
    this.service.login(this.usuario)
      .subscribe( data => {
        console.log(data);
      })
  }

}
