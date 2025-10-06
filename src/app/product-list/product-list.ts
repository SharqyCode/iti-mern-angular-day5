import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../product-form/product-form';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnChanges {
porductArr: Product[] = [];
@Input() recProduct: Product = {name: "", desc: "", imgUrl: "", rating: ""}
ngOnChanges(changes: SimpleChanges): void {
  if (changes['recProduct'].firstChange) return;
  console.log("onChnage", changes);
  this.porductArr.push(changes['recProduct'].currentValue)
}
}
