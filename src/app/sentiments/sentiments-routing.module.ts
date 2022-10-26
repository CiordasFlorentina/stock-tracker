import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SentimentComponent} from './sentiment.component';

const routes: Routes = [
  {path: ':id', component: SentimentComponent},
  {path: '**', component: SentimentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SentimentsRoutingModule {
}
