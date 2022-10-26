import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {MonthlyHistory} from '../shared/models/monthly-history.model';

@Component({
  selector: 'sentiment-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() history: MonthlyHistory[] = [];

  public monthMapping = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ]

  constructor(private router: Router) {
  }

  public getMonth(month: number): string {
    return this.monthMapping[month].toUpperCase();
  }

  public goBack(): void {
    this.router.navigate(['']);
  }
}
