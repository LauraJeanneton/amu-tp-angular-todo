// src/app/task-form.component.ts
import { ɵDomAdapter } from "@angular/common";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TaskFormComponent } from "./task-form.component";
import { Facture } from "../types/facture";
import {Router} from '@angular/router';
import { Client } from "../types/task";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";

@Component({
    selector: "app-creation-facture-form",
    template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
    <p>
    <label>Montant : </label><input 
            formControlName="text"
            type="text" 
            name="text" 
            placeholder="Montant" 
        />
        <br/><br/>
 <label>Statut : </label><select name="status" id="status" formControlName="status" [(ngModel)]="SEND_OPTION">
 <option value="SEND" >Envoyé</option>
 <option value="PAID">Payé</option>
</select>

    

 <br/><br/> 
 <button id="retour" >Enregistrer</button> &nbsp;&nbsp;
 <a id="retour" routerLink="/{{ id }}">Annuler</a>
        </p>
    </form>
    `
})
export class CreationFactureFormComponent {
    task?: Client;
     id: number = Number(this.route.snapshot.paramMap.get('id'));
     constructor(private route: ActivatedRoute, private service: TasksService, private router : Router) { }
    SEND_OPTION : any = "SEND";
    // Le décorateur @Output permet de signaler à Angular 
    // que notre composant va pouvoir faire sortir une information
    // vers l'exéterieur sous a forme d'un événément !
    // Et pour émettre un événement, on utilise une instance
    // de la classe EventEmitter tout en précisant que l'information
    // qui sera émise sera une string (le texte tapé dans le formulaire !) :
    @Output()
    onNewTask = new EventEmitter<Facture>();

    form = new FormGroup({
        text: new FormControl(),
        status: new FormControl()
    });
     truc: Facture = {
        idClient: this.id,
        amount:"",
        status:""
      };
    onSubmit() {
        this.truc.amount=this.form.value.text;
        this.truc.status=this.form.value.status;
       
        console.log(this.form.value)
        // Au moment de la soumission, on va déclencher un événement
        // Et la donnée que l'on va émettre sera la valeur du champ 
        // "text" qui se trouve dans notre formulaire !
        
    this.onNewTask.emit(this.truc);

        // On pourra même réinitialiser la valeur du formulaire
        // une fois que le traitement sera terminé :
        this.form.setValue({
            text: '',
            status:""
        });
        this.router.navigate(["/"+this.id]);
    }
    
}