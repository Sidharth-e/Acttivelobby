import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private Apiservice:ApiService) { }
  nativeplayerdata:any=[];
  nationalplayerdata:any=[];
  foreignplayerdata:any=[];
  ngOnInit(): void {
    this.nativeplayerdata=[];
    this.nationalplayerdata=[];
    this.foreignplayerdata=[];
    this.Apiservice.teams().subscribe((result:any)=>{
      console.log("response",result)
      this.nativeplayerdata =result.players
      this.nationalplayerdata =result.nationalPlayers
      this.foreignplayerdata =result.foreignPlayers
    });
    
  }

}
