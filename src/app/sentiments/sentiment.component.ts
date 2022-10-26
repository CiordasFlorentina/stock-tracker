import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SentimentService} from './shared/sentiment.service';
import {MonthlyHistory} from './shared/models/monthly-history.model';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {
  public history: MonthlyHistory[] = [];
  public companyName: string = '';
  public symbol = '';

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sentimentService: SentimentService
  ) {
  }

  public ngOnInit(): void {
    this.symbol = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    if (!this.symbol) {
      this.route.navigate(['']);
    } else {
      this.sentimentService.getHistory(this.symbol).subscribe(h => this.history = h);
      this.sentimentService.getStockName(this.symbol).subscribe(name => this.companyName = name);
    }

  }

}
