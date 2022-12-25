import { Injectable } from '@angular/core';
import { Observable, observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {HttpClient, HttpHeaders,HttpClientModule,HttpErrorResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  topscorers()
  {
  let headers = new HttpHeaders().set('X-RapidAPI-Key', 'f857fa3388msh3649c7ca9e106ffp1cf2f7jsn764d3f066dc6').set('X-RapidAPI-Host','footapi7.p.rapidapi.com')
  return this.http.get('https://footapi7.p.rapidapi.com/api/tournament/7/season/36886/best-players',{headers:headers})
  }
  teams()
  {
    let headers = new HttpHeaders().set('X-RapidAPI-Key', 'f857fa3388msh3649c7ca9e106ffp1cf2f7jsn764d3f066dc6').set('X-RapidAPI-Host','footapi7.p.rapidapi.com')
    return this.http.get('https://footapi7.p.rapidapi.com/api/team/2672/players',{headers:headers})
  }
  leagues()
  {
    let headers = new HttpHeaders().set('X-RapidAPI-Key', 'f857fa3388msh3649c7ca9e106ffp1cf2f7jsn764d3f066dc6').set('X-RapidAPI-Host','footapi7.p.rapidapi.com')
    return this.http.get('https://footapi7.p.rapidapi.com/api/tournament/7/seasons',{headers:headers})
  }
  fixture(){
    let headers = new HttpHeaders().set('X-RapidAPI-Key', 'f857fa3388msh3649c7ca9e106ffp1cf2f7jsn764d3f066dc6').set('X-RapidAPI-Host','football98.p.rapidapi.com')
    return this.http.get('https://football98.p.rapidapi.com/premierleague/fixtures',{headers:headers})
  }
}
