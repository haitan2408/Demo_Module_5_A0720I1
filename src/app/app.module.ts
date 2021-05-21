import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListProductComponent } from './component/product/list-product/list-product.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateProductComponent } from './component/product/create-product/create-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
