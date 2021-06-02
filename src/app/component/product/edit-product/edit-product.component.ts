import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ListProductComponent} from "../list-product/list-product.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  formCreate!: FormGroup;
  private id: number = 0;

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.initForm();
    this.productService.getById(this.id).subscribe(data => {
      this.formCreate.patchValue(data);
    });
  }

  initForm() {
    this.formCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(100)])),
      detail: new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]))
    })
  }

  editProduct() {
    if (this.formCreate.valid) {
      this.productService.editProduct(this.formCreate.value, this.id).subscribe(data=> {
        this.router.navigateByUrl("/")
      });

    }
  }

}
