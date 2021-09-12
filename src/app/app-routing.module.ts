import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('./about/about.module').then((m) => m.AboutModule),
  // },
  {
    path: 'sentiment',
    loadChildren: () =>
      import('./sentiment-analysis/sentiment-analysis.module').then((m) => m.SentimentAnalysisModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}