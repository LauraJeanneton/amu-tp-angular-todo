// src/app/task-form.component.ts

import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-task-form",
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <input 
              formControlName="text"
              type="text" 
              name="todo-text" 
              placeholder="Ajouter une tâche" 
            />
            <button>Ajouter</button>
        </form>
    `
})
export class TaskFormComponent {
    form = new FormGroup({
        text: new FormControl()
    });

    onSubmit() {
        console.log(this.form.value);
    }
}