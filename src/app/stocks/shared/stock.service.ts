import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';

import {ApiService} from '../../shared/api.service';
import {Quote} from './models/quote.model';
import {StockSymbol} from './models/stock-symbol.model';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private SEARCH_URL = 'search';
  private QUOTE_URL = 'quote';

  constructor(private apiService: ApiService, private storageService: StorageService) {
  }

  public getSymbol(searchParam: string,): Observable<StockSymbol> {
    return this.apiService.get<{ result: StockSymbol[] }>(
      this.SEARCH_URL, {q: searchParam}
    ).pipe(
      map(data => data.result[0])
    );
  }

  public getQuote(symbol: string): Observable<Quote> {
    return this.apiService.get<Quote>(
      this.QUOTE_URL, {symbol}
    );
  }

  public addToLocalStorage(stockSymbol: string): void {
    const newStocks = [...this.getFromLocalStorage(), stockSymbol];
    this.storageService.set('stocks', newStocks);
  }

  public removeFromLocalStorage(index: number): void {
    const currentSymbols = this.getFromLocalStorage();
    currentSymbols.splice(index, 1);
    this.storageService.set('stocks', currentSymbols);
  }

  public getFromLocalStorage(): string[] {
    return this.storageService.get('stocks');
  }

}
