import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  formCreate!: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formCreate = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(100)])),
      detail: new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]))
    })
  }

  createProduct() {
    if(this.formCreate.valid) {
      this.productService.createProduct(this.formCreate.value).subscribe(data=> {
        this.router.navigateByUrl("/");
      });

    }
  }
}
