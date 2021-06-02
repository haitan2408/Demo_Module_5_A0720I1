import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<any> {
    return this.httpClient.get(this.url + "/products");
  }

  createProduct(product: Product): Observable<any> {
    // @ts-ignore
    return this.httpClient.post(this.url + "/products", product);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + "/products/" + id);
  }

  editProduct(product: Product, id: number): Observable<any> {
    return this.httpClient.put(this.url + "/products/" + id, product)
  }

  searchProduct(search: string): Observable<any> {
    return this.httpClient.get(this.url + "/products?name_like=" + search)
  }
}
