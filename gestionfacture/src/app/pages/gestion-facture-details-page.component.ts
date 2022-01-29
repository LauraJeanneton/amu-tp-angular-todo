import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Task } from "../types/task";

@Component({
    selector: 'app-gestion-details-page',
    template: `
    <ng-container *ngIf="task">
        <h2>{{ task.name }}</h2>
        <strong>Statut : </strong>
        {{task.mail}}
        <br />
        <a routerLink="/">Retour aux tâches</a>
    </ng-container>

    <p *ngIf="!task">En cours de chargement</p>
`
})
export class ClientDetailsPageComponent {
    task?: Task;

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.service
            .findOne(id)
            .subscribe(tasks => this.task = tasks[0]);
    }
 }