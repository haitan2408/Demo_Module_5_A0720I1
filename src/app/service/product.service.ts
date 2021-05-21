import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private listProduct: Product[] = [
    {id: 1, name: "Iphone", detail: "iphone vip"},
    {id: 2, name: "SamSung", detail: "iphone vip"},
    {id: 3, name: "Oppo", detail: "iphone vip"},
  ]

  constructor() {
  }

  getAllProduct(): Product[] {
    return this.listProduct;
  }

  createProduct(product: Product) {
    if (this.listProduct.length == 0) {
      product.id = 1;
    } else {
      product.id = this.listProduct[this.listProduct.length - 1].id + 1;
    }
    // @ts-ignore
    return this.listProduct.push(product)
  }

  getById(id: number): Product {
    return this.listProduct[id - 1];
  }

  editProduct(product: Product, id: number) {
    for (let i = 0; i < this.listProduct.length; i++) {
      if(this.listProduct[i].id == id) {
        this.listProduct[i] = product;
      }
    }
      }

}
