import { Component, LOCALE_ID, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'gestion-aulas-app';
  isLoggedIn = false;

  constructor() {
  }

  ngOnInit(): void {
    
  }
}
