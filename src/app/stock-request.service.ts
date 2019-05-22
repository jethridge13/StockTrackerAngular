import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockRequestService {

  baseUrl = 'localhost:3000';

  constructor(private http: HttpClient) { }

  getStocks(symbols: String[]) {
    return this.http.get(`${this.baseUrl}/get?symbols=${symbols.join()}`);
  }
}
