import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,HttpClientModule} from '@angular/common/http'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  constructor(private Apiservice:ApiService) { }
  league:any=[]
  ngOnInit(): void {
    this.league=[];
    this.Apiservice.leagues().subscribe((result:any)=>{
      console.log("response",result)
      this.league =result.seasons
    });
    
  }

}
