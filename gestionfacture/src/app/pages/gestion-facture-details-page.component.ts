import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Facture } from "../types/facture";
import { Client } from "../types/task";

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
            <ng-container *ngIf="facture" >
                <div id="facture" *ngFor="let fact of facture">
                {{fact.amount}} {{fact.status}}
                </div>
            </ng-container>

        </div>
       
        <a id="retour" routerLink="/{{ task.id }}/invoices/create">Créer une facture</a>
        </ng-container>
    <p *ngIf="!task">En cours de chargement</p>
`
})
export class ClientDetailsPageComponent {
    task?: Client;
    facture?:Facture[];

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.service
            .findOne(id)
            .subscribe(tasks => this.task = tasks[0]);
        
            this.service
            .findAllFacture(id)
            .subscribe(facture => this.facture = facture);
            
    }
 }