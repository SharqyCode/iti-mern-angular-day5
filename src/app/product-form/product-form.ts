import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



export type Product = {
  name: string;
  desc: string;
  imgUrl: string;
  rating: string;
}

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
prodObj!: Product;
successMsg = "Ready to submit" 
errorMsg = "Pease input valid data!" 
submitted = false;
@Output() sendProdData = new EventEmitter<Product>();

prodForm = new FormGroup({
  name: new FormControl('', [Validators.maxLength(10), Validators.required]),
  desc: new FormControl('', [Validators.maxLength(100), Validators.required]),
  imgUrl: new FormControl('', [Validators.maxLength(1000)]),
  rating: new FormControl('', [Validators.max(5), Validators.required])
})

onSubmit() {
  this.submitted = true
    if (this.prodForm.valid && this.prodForm.value['name'] && this.prodForm.value['desc'] && this.prodForm.value['imgUrl'] && this.prodForm.value['rating']) {
      let prodObj: Product = {
        name: this.prodForm.value['name'],
        desc: this.prodForm.value['desc'],
        imgUrl: this.prodForm.value['imgUrl'],
        rating: this.prodForm.value['rating'],
      };
      this.sendProdData.emit(prodObj);
      this.prodForm.controls.name.reset()
      this.prodForm.controls.desc.reset()
      this.prodForm.controls.imgUrl.reset()
      this.prodForm.controls.rating.reset()
    }
    console.log(this.prodForm);
  }

}
