import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ProductService {
    productsApiBaseUrl = 'https://localhost:5001/';

    constructor(private http: HttpClient) {
        
    }

    getProducts() {
        return this.http.get(this.productsApiBaseUrl + 'products');
    }
}