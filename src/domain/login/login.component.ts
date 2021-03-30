import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SpinnerComponent } from 'src/app/components/dialog/spinner/spinner.component';
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
    private router: Router,
    private spinner: MatDialog,
    private snackBar: MatSnackBar
    ) {
  }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onSubmit() {
    if (this.formularioValido()) {

      const dialogRef = this.spinner.open(SpinnerComponent, {panelClass: 'spinner-dialog-container'});
      this.service.login(this.usuario)
      .subscribe( data => {
        dialogRef.close();
        this.snackBar.open('Login exitoso', null, {duration: 5000});
        this.router.navigate(['dashboard']);
      }, err => {
        dialogRef.close();
        this.snackBar.open(err.error.mensaje, null, {duration: 10000});
      })

    }

  }

  formularioValido(): boolean {
    if (this.usuario.username.length == 0) {
      this.snackBar.open('Ingrese el nombre de usuario', null, {duration: 100000});
      return false;
    }
    if (this.usuario.password.length == 0) {
      this.snackBar.open('Ingrese la contraseña', null, {duration: 10000});
      return false;
    }
    return true;
  }

}
