
import { Component } from "@angular/core";

@Component({
    selector: "app-task-form",
    template: `
        <form>
            <input 
              type="text" 
              name="todo-text" 
              placeholder="Ajouter une tâche" 
            />
            <button>Ajouter</button>
        </form>
    `
})
export class TaskFormComponent {}