import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../usuario/usuario.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private service: AuthService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onSubmit() {
    console.log(this.usuario);
    this.service.login(this.usuario)
      .subscribe( data => {

        console.log(data);
        console.log("nav to dashboard");
        this.router.navigate(['dashboard']);

      }, err => {

        console.log(err);
        console.log(err['error'].mensaje);
        alert(err['error'].mensaje);

      })
  }

}
