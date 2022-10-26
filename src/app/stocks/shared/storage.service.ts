import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public set(token: string, value: any[]): void {
    localStorage.setItem(token, JSON.stringify(value));
  }

  public get<T>(token: string): T {
    return JSON.parse(localStorage.getItem(token) ?? '[]');
  }
}
