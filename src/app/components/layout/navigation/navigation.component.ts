import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/domain/login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  isLoggedIn: boolean;
  element: any;
  opened: boolean;
  
  items = [
    {link: "usuario"     , nombre: "Usuarios" , icono: "account_box"  },
    {link: "carrera"     , nombre: "Carreras" , icono: "school"       },
    {link: "materia"     , nombre: "Materias" , icono: "library_books"},
    {link: "aula"        , nombre: "Aulas"    , icono: "meeting_room" },
    {link: "distribucion", nombre: "Horarios" , icono: "event_note"   }
  ];
  
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.isLoggedIn = authService.isAutenticado();
    this.opened = this.isLoggedIn;
  }

  ngOnInit() {
  }

  eventAbrir() {

  }
  
  eventCerrar() {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }


}
