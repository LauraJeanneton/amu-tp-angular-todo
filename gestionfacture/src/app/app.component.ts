// src/app/app.component.ts

import { Component } from '@angular/core';
import { Tasks } from './types/task';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1>La Todo App</h1>

        <main>
          <app-gestion-facture 
            [tasks]="tasks"
          ></app-gestion-facture>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  tasks: Tasks[] = [
    { id: 1, name: "Laura Jeanneton", mail: "laurajeanneton24@gmail.com" },
    { id: 2, name: "Leny Lacoste", mail:"lacoste.leny97@gmail.com" },
  ];
}