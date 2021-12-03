import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';


  getCommands(){
    
    return this.http.get(this.BaseURI+ '/commandes');
  }


  PostCommande( nomUser,phoneNumber,platsId,platName,myDate = new Date()) {
    
    var body = {
      nomUser: nomUser,    
      dateCommande:myDate ,
      phoneNumber: phoneNumber,
      platsId: platsId,
      platName: platName
    
    };
    return this.http.post(this.BaseURI + '/commandes', body);
  }
}
