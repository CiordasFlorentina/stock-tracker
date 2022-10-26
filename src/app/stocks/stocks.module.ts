import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {StocksRoutingModule} from './stocks-routing.module';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {StocksComponent} from './stocks.component';


@NgModule({
  declarations: [
    SearchComponent,
    DetailComponent,
    StocksComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    ReactiveFormsModule,
  ]
})
export class StocksModule {
}
