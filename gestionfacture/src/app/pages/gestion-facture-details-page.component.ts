import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Task } from "../types/task";

@Component({
    selector: 'app-gestion-details-page',
    template: `
    
    <ng-container *ngIf="task">
        <h1>Fiche de {{task.name}}</h1>
        
        <strong>Contact : </strong>
        {{task.mail}}
        <br />
       
        <a id="retour" routerLink="/">Retour aux clients</a>
       
        <div id="factures">
        <div id="facture">
        Fact 1
    </div>
        </div>
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