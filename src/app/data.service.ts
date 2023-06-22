import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('/api/v1/products');
  }
  createProducts(productObject: any): Observable<any> {
    return this.http.post('/api/v1/products', productObject);
  }
  sortProducts(products: any): Observable<any> {
    return this.http.get(`/api/v1/products/sorting?sort=${products}`);
  }
}

