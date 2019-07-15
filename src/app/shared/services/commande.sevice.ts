import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Commande } from '../models/commande';
import { Config } from '../config';

@Injectable()
export class CommandeService extends GenericService {
    constructor(private http:HttpClient){
        super();
    }

    acheter(id:number,quantite:number) {
        var data={
            'produit_id':id,
            'quantite':quantite
        };
        return this.http.post<Commande>(Config.baseUrl + "/commandes",data,{
            headers:new HttpHeaders({
                'content-type':'application/json',
                'authorization':'bearer '+localStorage.getItem('token')
            })
        });
      }
}