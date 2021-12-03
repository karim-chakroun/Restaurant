import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CommandService } from 'src/app/shared/command.service';
import { PlatsService } from 'src/app/shared/plats.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-show-plats',
  templateUrl: './show-plats.component.html',
  styleUrls: ['./show-plats.component.css']
})
export class ShowPlatsComponent implements OnInit {
platId:string
plat:any
  constructor(public service:PlatsService,public uService:UserService, public cService:CommandService,
    @Inject(MAT_DIALOG_DATA) private data: any,) { 
    
  }

  userDetails
  ngOnInit() {
    this.uService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
   this.platId=this.data.platId;
   this.getPlatById()
  }

  getPlatById(){
    this.service.getPlatsById(this.platId).subscribe(
      res =>{
        console.log(res)
        this.plat = res;
      },
      err =>{
        console.log(err);
      }   
    );
  }

  subCommande(nomUser,phoneNumber,platsId,platName){
    this.cService.PostCommande(nomUser,phoneNumber,platsId,platName).subscribe(
      (res: any) => {
        
          
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );

  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44319/${serverPath}`;
  }
  

}
