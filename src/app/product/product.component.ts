import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;
  toggleCardStatus: boolean = false;
  toggleTableStatus: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.products = res.data;
        }
      },
      error: (error) => {
        alert(error.message);
      },
    });  
  }
  toggleCard() {
    this.toggleCardStatus = true;
    this.toggleTableStatus = false;
  }
  toggleTable() {
    this.toggleCardStatus = false;
    this.toggleTableStatus = true;
  }


  sorting(type: any) {
    this.dataService.sortProducts(type).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.products = res.data;
        }
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }


  key:string ="id";
  reverse: boolean = false;
  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse
  }

  
  get cardStatus() {
    return this.toggleCardStatus;
  }
  get tableStatus() {
    return this.toggleTableStatus;
  }
}
