import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/shared/command.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  constructor(public service:CommandService) { }

  commands;
  ngOnInit() {

    this.service.getCommands().subscribe(
      res =>{
        this.commands = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

}
