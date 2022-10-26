import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

import {Stock} from '../shared/models/stock.model';


@Component({
  selector: 'stock-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() public stock: Stock = {
    description: '',
    displaySymbol: '',
    quote: null
  };

  @Output() public stockRemoved = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  public removeStock(): void {
    this.stockRemoved.emit();
  }

  public navigateToSentiment(displaySymbol: string): void {
    this.router.navigate([`sentiment`, displaySymbol]);
  }
}
