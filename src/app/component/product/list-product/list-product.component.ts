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
  search = "";

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initDataListProduct();
  }

  initDataListProduct() {
    this.productService.getAllProduct().subscribe(data => {
      this.listProduct = data;
      console.log(this.listProduct)
    })
  }

  searchProduct() {
    this.productService.searchProduct(this.search).subscribe(data => {
      this.listProduct = data;
    })
  }
}
