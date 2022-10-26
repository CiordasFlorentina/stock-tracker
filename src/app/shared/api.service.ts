import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://finnhub.io/api/v1/';
  private TOKEN = 'bu4f8kn48v6uehqi3cqg';

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(path: string, params: { [key: string]: string } = {}): Observable<T> {
    let parsedParams = new HttpParams();
    parsedParams = parsedParams.append('token', this.TOKEN);

    for (const param in params) {
      parsedParams = parsedParams.append(param, params[param]);
    }

    return this.httpClient.get<T>(`${this.BASE_URL}/${path}`, {
      params: parsedParams
    });
  }
}
