import {Component, OnInit} from '@angular/core';
import {catchError, concatMap, from, map, Observable, of, switchMap} from 'rxjs';

import {StockService} from './shared/stock.service';
import {Stock} from './shared/models/stock.model';
import {StockSymbol} from './shared/models/stock-symbol.model';
import {Quote} from './shared/models/quote.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public stocks: Stock[] = [];
  public loading = false;
  public authError = false;


  constructor(private stocksService: StockService) {
  }

  public ngOnInit(): void {
    this.loading = true;
    this.setFromLocalStorage();
  }

  public onSearchedSymbol(searchedSymbol: string): void {
    this.loading = true;
    this.stocksService.addToLocalStorage(searchedSymbol);

    this.getStock(searchedSymbol)
      .subscribe({
        next: (stock: Stock) => {
          this.stocks.push(stock);
          this.loading = false;
        },
        error: this.handleError.bind(this)
      });
  }

  public onStockRemoved(index: number): void {
    this.stocks.splice(index, 1);
    this.stocksService.removeFromLocalStorage(index);
  }

  private setFromLocalStorage(): void {
    from(this.stocksService.getFromLocalStorage())
      .pipe(
        concatMap(symbol => this.getStock(symbol).pipe(catchError(() => of(null))))
      ).subscribe({
      next: (stock: Stock | null) => {
        if (stock) {
          this.stocks.push(stock);
        }
      },
      complete: () => this.loading = false
    });
  }

  private getStock(searchedSymbol: string): Observable<Stock> {
    return this.stocksService.getSymbol(searchedSymbol).pipe(
      switchMap((sSymbol: StockSymbol) => this.stocksService.getQuote(searchedSymbol)
        .pipe(map((quote: Quote) => ({...sSymbol, quote})))
      )
    )
  }

  private handleError(): void {
    this.loading = false;
    this.authError = true;
    setTimeout(() => this.authError = false, 5000);
  }
}
