import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from './teams/teams.component'
import {LeaguesComponent} from './leagues/leagues.component'
import {FixturesComponent} from './fixtures/fixtures.component'
import {TopscorersComponent} from './topscorers/topscorers.component'

const routes: Routes = [
  {path:'',component:TeamsComponent},
  {path:'leagues',component:LeaguesComponent},
  {path:'fixtures',component:FixturesComponent},
  {path:'top',component:TopscorersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[TeamsComponent,LeaguesComponent,FixturesComponent,TopscorersComponent]
