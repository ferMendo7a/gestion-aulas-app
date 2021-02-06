import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/domain/login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  //@ViewChild('sidenav', { static: false }) sidenav: ElementRef;

  isLoggedIn: boolean;
  element: any;
  opened: boolean;
  showNav: boolean = false;
  
  items = [
    {link: "usuario"     , nombre: "Usuarios" , icono: "account_box"  },
    {link: "carrera"     , nombre: "Carreras" , icono: "school"       },
    {link: "materia"     , nombre: "Materias" , icono: "library_books"},
    {link: "aula"        , nombre: "Aulas"    , icono: "meeting_room" },
    {link: "distribucion", nombre: "Horarios" , icono: "event_note"   }
  ];
  
  
  constructor( 
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2
    ) {
        this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationStart ) {
            this.showNav = event.url !== '/login';
            if (this.showNav) {
              this.sidenav.open();
            } else {
              this.sidenav.close();
            }
            this.opened = this.showNav;
          }
        });
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
