import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gestion-aulas-app';
  isLoggedIn = false;

  constructor(
    private router: Router
  ) {
/*    this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (this.isLoggedIn) {
                }
            }
        });
*/

  }

  ngOnInit(): void {
    
  }
}
