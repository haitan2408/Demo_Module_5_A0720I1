import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from "../../../model/Product";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initDataListProduct();
  }

  initDataListProduct() {
    this.listProduct = this.productService.getAllProduct();
    console.log(this.listProduct)
  }

}
