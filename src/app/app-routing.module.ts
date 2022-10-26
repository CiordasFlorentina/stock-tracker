import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule)},
  {path: 'sentiment', loadChildren: () => import('./sentiments/sentiments.module').then(m => m.SentimentsModule)},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
