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

  isLoggedIn: boolean;
  element: any;
  opened: boolean;
  showNav: boolean = false;
  
  items = []; 

  constructor( 
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2
    ) {
      this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart ) {
          this.cargarItemsMenu();
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

  cargarItemsMenu() {
    const registros = [];
    const gestion = [];
    const configuracion = [];
    
    const privilegios = this.authService.getPrivilegios().map(data => data.toLowerCase());

    if (privilegios.indexOf('usuarios') > 1)
      registros.push({link: "usuario", nombre: "Usuarios", icono: "account_box"  });
    if (privilegios.indexOf('carreras') > 1)
      registros.push({link: "carrera", nombre: "Carreras", icono: "school"});
    if (privilegios.indexOf('materias') > 1)
      registros.push({link: "materia", nombre: "Materias", icono: "library_books"});
    if (privilegios.indexOf('aulas') > 1)
      registros.push({link: "aula", nombre: "Aulas", icono: "meeting_room" });
    if (registros.length > 0)
      this.items['registros'] = registros;

      console.log('indexOf horarios');
      console.log(privilegios.indexOf('horarios'));

    if (privilegios.indexOf('horarios') > 1)
      gestion.push({link: "distribucion", nombre: "Horarios", icono: "event_note"});
    if (gestion.length > 0)
      this.items['gestion'] = gestion;
      
      console.log('indexOf privilegios');
      console.log(privilegios.indexOf('privilegios'));
    if (privilegios.indexOf('privilegios') >= 0)
      configuracion.push({link: "privilegio", nombre: "Privilegios", icono: "event_note"});
    if (configuracion.length > 0)
      this.items['configuracion'] = configuracion;


      console.log(this.items['configuracion'][0].nombre);

  }
}
