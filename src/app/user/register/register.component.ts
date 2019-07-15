import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UtilisateurService } from '../../shared/services/utilisateur.service';
import { Utilisateur } from 'src/app/shared/models/utilisateur';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  utilisateur=new Utilisateur();
  constructor(private http:Http,private utilisateurService :UtilisateurService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.utilisateurService.register(this.utilisateur)
    .subscribe(
      (data)=>{
        window.alert("account created!!!\n try to login");
        location.replace('/user/login');

      },
      (error)=> {

      }
    );
    //console.log(this.utilisateur);
  }
}
