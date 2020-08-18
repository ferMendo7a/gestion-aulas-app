import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  

  element: any;
  opened: boolean;
  
  items = [
    {link: "usuario"     , nombre: "Usuarios" , icono: "account_box"  },
    {link: "carrera"     , nombre: "Carreras" , icono: "school"       },
    {link: "materia"     , nombre: "Materias" , icono: "library_books"},
    {link: "aula"        , nombre: "Aulas"    , icono: "meeting_room" },
    {link: "distribucion", nombre: "Horarios" , icono: "event_note"   }
  ];
  
  
  constructor() {
    this.opened = true;      
  }

  ngOnInit() {
  }

  eventAbrir() {
    console.log('open')
  }
  
  eventCerrar() {
    console.log('close')
  }


}
