import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { HomeComponent } from './home/home.component';
// import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'teams',
    loadChildren: () =>
      import('./teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'teams/:id/:name',
    loadChildren: () => import('./team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./news/news/news.module').then((m) => m.NewsModule),
  },
  { path: 'competition', component: CompetitionComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
