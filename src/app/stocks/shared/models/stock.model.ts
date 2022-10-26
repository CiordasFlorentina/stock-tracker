import {Quote} from './quote.model';

export interface Stock {
  description: string,
  displaySymbol: string
  quote: Quote | null
}
