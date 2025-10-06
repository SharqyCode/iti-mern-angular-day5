import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() prodName : string = "title";
  @Input() prodDesc : string = "description"
  @Input() prodImgUrl : string = "https://bookcoverarchive.com/wp-content/uploads/amazon/1984.jpg"
  @Input() prodRating : string = "3.5"
}
