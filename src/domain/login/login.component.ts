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
    
  }

  ngOnInit() {
    this.usuario = new Usuario();
  }
  
  onSubmit() {
    console.log(this.usuario);
    this.service.login(this.usuario)
      .subscribe( data => {
        console.log(data);
      }, err => {
        console.log("error!!!");
        console.log(err['error'].mensaje);
      })
  }

}
