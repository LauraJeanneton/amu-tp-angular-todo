// src/app/api/tasks.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tasks } from "../types/task";
import { Facture, Factures } from "../types/facture";
import { BoundElementProperty } from "@angular/compiler";

const SUPABASE_URL = 'https://tabibcoqujeidnjexfoi.supabase.co/rest/v1/clients';
const SUPABASE_URL_FACTURE = 'https://tabibcoqujeidnjexfoi.supabase.co/rest/v1/facture';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ3NjUzNCwiZXhwIjoxOTU5MDUyNTM0fQ.0qJa4eUcVYkSMRp6yoTkkgwkR9bb5J1Ukj3-wp-jC0U';


@Injectable()
export class TasksService {

    
    constructor(private http: HttpClient) { }

    findAll(): Observable<Tasks> {
        return this.http.get<Tasks>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    findAllFacture(id:number): Observable<Factures> {
        return this.http.get<Factures>(SUPABASE_URL_FACTURE+"?idclient=eq."+id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    /**
     * Créé une tâche auprès de l'API qui nous retournera un tableau contenant la tâche
     * nouvellement créée
     */
    create(text: string): Observable<Tasks> {
        console.log("Ajout de "+text)
        return this.http.post<Tasks>(SUPABASE_URL, {
            name: text,
            mail: "false"
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    createFacture(idClient:number,amount:string,status:string): Observable<Factures> {
        console.log("Ajout de "+idClient+" "+amount +" "+ status)
        return this.http.post<Factures>(SUPABASE_URL_FACTURE, {
            idclient: idClient,
            amount: amount,
            status:status
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    findOne(id: number): Observable<Tasks> {
        return this.http.get<Tasks>(SUPABASE_URL + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }
}