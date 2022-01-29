import { TaskFormComponent } from "../task-form.component";

export type Task = {
    id: number;
    name: string;
    mail: string;
}

export type Tasks = Task[];