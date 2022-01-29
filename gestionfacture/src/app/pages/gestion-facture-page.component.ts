// src/app/app.component.ts

import { Component } from '@angular/core';
import { Tasks } from 'src/app/types/task';
import { Factures } from 'src/app/types/facture';
import { HttpClient } from "@angular/common/http";
import { TasksService } from 'src/app/api/tasks.service';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ3NjUzNCwiZXhwIjoxOTU5MDUyNTM0fQ.0qJa4eUcVYkSMRp6yoTkkgwkR9bb5J1Ukj3-wp-jC0U';

@Component({
    selector: "app-gestion-list-page",
    template: `
        <app-gestion-facture
            [tasks]="tasks" 
        >
        </app-gestion-facture>
        <app-task-form (onNewTask)="addTask($event)"></app-task-form>
    `
})

export class GestionFacturePageComponent {
  tasks: Tasks = [];
  factures:Factures=[];

  constructor(
    private http: HttpClient, 
    private service: TasksService
  ) { }

  ngOnInit() {
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