// src/app/app.component.ts

import { Component } from '@angular/core';
import { Tasks } from './types/task';
import { HttpClient } from "@angular/common/http";

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
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  tasks: Tasks = [];

  // Le constructeur nous permet toujours d'obtenir une instance
  // du HttpClient, mais on ne l'utilise plus du tout dans 
  // le constructeur
  constructor(private http: HttpClient) { }

  // La méthode ngOnInit sera appelée par Angular lors du chargement 
  // du composant. C'est typiquement ici que l'on placera nos comportements
  // complexes à exécuter au départ :
  ngOnInit() {
    this.http.get<Tasks>('https://tabibcoqujeidnjexfoi.supabase.co/rest/v1/clients', {
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_KEY
      }
    }).subscribe((tasks) => this.tasks = tasks)
  }

}