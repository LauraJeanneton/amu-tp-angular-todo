// src/app/app.component.ts

import { Component } from '@angular/core';
import { Tasks } from './types/task';
import { HttpClient } from "@angular/common/http";
import { TasksService } from './api/tasks.service';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ3NjUzNCwiZXhwIjoxOTU5MDUyNTM0fQ.0qJa4eUcVYkSMRp6yoTkkgwkR9bb5J1Ukj3-wp-jC0U'

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1>Liste des clients</h1>

        <main>
        <app-gestion-facture 
        [tasks]="tasks"
      ></app-gestion-facture >
      <app-task-form 
      (onNewTask)="addTask($event)"
    ></app-task-form>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  tasks: Tasks = [];

  constructor(
    private http: HttpClient, 
    private service: TasksService
  ) { }

  // La méthode ngOnInit sera appelée par Angular lors du chargement 
  // du composant. C'est typiquement ici que l'on placera nos comportements
  // complexes à exécuter au départ :
  ngOnInit() {
    // On remplace le code de la requête HTTP par l'appel
    // à la méthode findAll() de notre service, qui renverra
    // exactement la même chose que ce que renvoyait le
    // HttpClient, on réagira donc de la même manière via la 
    // méthode subscribe()
    this.service
      .findAll()
      .subscribe((tasks) => this.tasks = tasks)
  }

  addTask(name: string) {
    this.service
      .create(name)
      .subscribe((tasks) => this.tasks.push(tasks[0]));
  }
}