import { Component } from '@angular/core';
import { Product, ProductForm } from "../product-form/product-form";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-product-dashboard',
  imports: [ProductForm, ProductList],
  templateUrl: './product-dashboard.html',
  styleUrl: './product-dashboard.css'
})
export class ProductDashboard {
  prod: Product= {name :"", desc: "", imgUrl: "", rating: ""};
  
  reciveData(data: Product) {
    this.prod = data;
    console.log(this.prod);
    }
}
