import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';


  PostCommande( nomUser,phoneNumber,platsId,myDate = new Date()) {
    
    var body = {
      nomUser: nomUser,    
      dateCommande:myDate ,
      phoneNumber: phoneNumber,
      platsId: platsId
    
    };
    return this.http.post(this.BaseURI + '/commandes', body);
  }
}
