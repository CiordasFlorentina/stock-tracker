import {Injectable} from '@angular/core';
import {formatDate} from '@angular/common';
import {map, Observable} from 'rxjs';

import {MonthlyHistory} from './models/monthly-history.model';
import {ApiService} from '../../shared/api.service';
import {StockService} from '../../stocks/shared/stock.service';


@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private HISTORY_URL = '/stock/insider-sentiment';

  constructor(private apiService: ApiService, private stockService: StockService) {
  }

  public getHistory(searchParam: string): Observable<MonthlyHistory[]> {
    const fromDate = new Date();
    const toDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 3);
    toDate.setMonth(toDate.getMonth() - 1);

    return this.apiService.get<{ data: MonthlyHistory[] }>(
      this.HISTORY_URL, {
        symbol: searchParam,
        from: formatDate(fromDate, 'yyyy-MM-dd', 'en'),
        to: formatDate(toDate, 'yyyy-MM-dd', 'en')
      })
      .pipe(map(result => result.data));
  }

  public getStockName(symbol: string): Observable<string> {
    return this.stockService.getSymbol(symbol).pipe(map(res => res.description));
  }

}
