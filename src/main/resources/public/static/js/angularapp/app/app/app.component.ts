import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/courses" routerLinkActive="active">View courses</a>
            <a routerLink="/teachers" routerLinkActive="active">View teachers</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    //styleUrls: ['./css/app.component.css']
})

export class AppComponent {
    title = 'Gestor de cursos';
}