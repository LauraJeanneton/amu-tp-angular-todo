// src/app/app.component.ts

import { Component } from '@angular/core';
import { Tasks } from './types/task';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1>La Todo App</h1>

        <main>
          <app-todo-list 
            [tasks]="tasks" 
          ></app-todo-list>
          <app-task-form></app-task-form>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  tasks: Tasks = [
    { id: 1, text: "Aller faire des courses", done: false },
    { id: 2, text: "Faire à manger", done: true },
  ];
}