import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SentimentsRoutingModule} from './sentiments-routing.module';
import { SentimentComponent } from './sentiment.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    SentimentComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    SentimentsRoutingModule
  ]
})
export class SentimentsModule {
}
