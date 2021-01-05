import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsComponent } from './teams/teams.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'news', component: NewsComponent },
  { path: "competition", component: CompetitionComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
