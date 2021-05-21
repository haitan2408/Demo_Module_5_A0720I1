import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./component/product/list-product/list-product.component";
import {CreateProductComponent} from "./component/product/create-product/create-product.component";
import {EditProductComponent} from "./component/product/edit-product/edit-product.component";

const routes: Routes = [
  {path: "", component: ListProductComponent},
  {path: "create-product", component: CreateProductComponent},
  {path: "edit-product/:id", component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
