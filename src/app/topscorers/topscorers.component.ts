import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,HttpClientModule} from '@angular/common/http'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-topscorers',
  templateUrl: './topscorers.component.html',
  styleUrls: ['./topscorers.component.scss']
})
export class TopscorersComponent implements OnInit {

  constructor(private Apiservice:ApiService) { }
  topgoal:any=[];
  toprating:any=[];
  topsaves:any=[];

  ngOnInit(): void {
  this.topgoal=[];
  this.toprating=[];
  this.topsaves=[];
  this.Apiservice.topscorers().subscribe((result:any)=>{
    this.topgoal =result.topPlayers.goals
    this.toprating =result.topPlayers.rating
    this.topsaves =result.topPlayers.saves
  })

  }

}
