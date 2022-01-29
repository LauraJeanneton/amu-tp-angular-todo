// src/app/todo-list.component.ts

import { Component, Input } from "@angular/core";
import { Tasks } from './types/task';
@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-todo-list> sera rencontré dans
    // un template HTML
    selector: 'app-gestion-facture',
    // Le HTML reprend ici notre liste de tâches
    template: `
    <h1>Liste des clients</h1>
    <ul>
          <li *ngFor="let item of tasks">
          <label id="item-{{ item.id }}">
            
            {{ item.name }} 
          </label>
          <a routerLink="/{{ item.id }}/details">Details</a>
    </li>
</ul>
    `
})

export class GestionFactureComponent {
    @Input()
    tasks: Tasks = []; 
}