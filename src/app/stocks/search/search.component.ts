import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'stock-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchedSymbol = new EventEmitter<string>();

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      stockName: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  public onSubmit(): void {
    this.searchedSymbol.emit(this.searchForm.value.stockName.toUpperCase());
    this.searchForm.reset();
  }
}
