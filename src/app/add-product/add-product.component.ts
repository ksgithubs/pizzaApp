import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html', 
  styleUrls: ['./add-product.component.css'],
})



export class AddProductComponent implements OnInit {
  image: File;
  productForm = new FormGroup({
    productPic: new FormControl('', Validators.required),
    productName: new FormControl('', Validators.required),
    mrp: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    creationDate: new FormControl('', Validators.required),
    expiryDate: new FormControl('', Validators.required),
  });

  constructor(private dataService: DataService, private Router:Router) {}

  ngOnInit(): void {}

  formSubmit() {

    let productObj = this.productForm.value;
    let formData = new FormData();
    formData.append('productObj', JSON.stringify(productObj));
    formData.append('productPic', this.image);
    
    this.dataService.createProducts(formData).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          alert('Success');
          this.Router.navigateByUrl("/product")
        }
      },
      error: (err) => {
        alert('Error');
        console.log(err);

      },
    });
  }



  get productPic() {
    return this.productForm.get('productPic');
  }
  get productName() {
    return this.productForm.get('productName');
  }
  get mrp() {
    return this.productForm.get('mrp');
  }
  get category() {
    return this.productForm.get('category');
  }
  get creationDate() {
    return this.productForm.get('creationDate');
  }
  get expiryDate() {
    return this.productForm.get('expiryDate');
  }

  onFileSelect(event) {
    this.image = event.target.files[0];
  }
}
