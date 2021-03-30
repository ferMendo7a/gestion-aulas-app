import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/domain/login/login.service';
import { PrivilegioService } from 'src/domain/privilegio/privilegio.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

  isLoggedIn: boolean;
  element: any;
  opened: boolean;
  showNav: boolean = false;
  
  items = []; 

  constructor( 
    private authService: AuthService,
    private router: Router,
    private privilegioService: PrivilegioService,
    ) {
      this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart ) {
          console.log(event.url)
          this.cargarItemsMenu();
          this.exhibeNav(event);
          this.validaAccesoNavegacion(event);
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

  cargarItemsMenu() {
    const registros = [];
    const gestion = [];
    const configuracion = [];
    this.items = [];
    
    const privilegios = this.authService.getPrivilegios();

    if (privilegios.indexOf('usuarios') >= 0)
      registros.push({link: "usuario", nombre: "Usuarios", icono: "account_box"  });
    if (privilegios.indexOf('carreras') >= 0)
      registros.push({link: "carrera", nombre: "Carreras", icono: "school"});
    if (privilegios.indexOf('materias') >= 0)
      registros.push({link: "materia", nombre: "Materias", icono: "library_books"});
    if (privilegios.indexOf('aulas') >= 0)
      registros.push({link: "aula", nombre: "Aulas", icono: "meeting_room" });
    if (registros.length > 0)
      this.items['registros'] = registros;

    if (privilegios.indexOf('distribucion') >= 0)
      gestion.push({link: "distribucion", nombre: "Distribucion", icono: "event_note"});
    if (gestion.length > 0)
      this.items['gestion'] = gestion;
      
    if (privilegios.indexOf('privilegios') >= 0)
      configuracion.push({link: "privilegio", nombre: "Privilegios", icono: "event_note"});
    if (configuracion.length > 0)
      this.items['configuracion'] = configuracion;

  }

  exhibeNav(event) {
    this.showNav = event.url !== '/login';
    if (this.showNav) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
    this.opened = this.showNav;
  }

  validaAccesoNavegacion(event) {
    if (event.url !== '/login' && event.url !== '/dashboard' && event.url !== '/') {
      if (!this.privilegioService.puedeAccederUrl(event.url))
      this.router.navigate(['']);
    }
  }

}
