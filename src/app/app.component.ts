import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { LoginService } from './../domain/login/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gestion-aulas-app';
  isLoggedIn = false;

  constructor() {
  }

  ngOnInit(): void {
    
  }
}
