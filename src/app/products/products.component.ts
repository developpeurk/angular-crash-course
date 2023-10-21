import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductRepresentation[] = [];

  product: ProductRepresentation = {
    title: 'test',
    price: 1,
    description: 'test',
    category: 'test',
    image: 'test'
  };


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    //this.createProduct();
   
  }


  
  getAllProducts = () => this.service.getAllProductsWithLimit().subscribe({
    next: (result) => {
      this.products = result;
      
    },
    error: (error) => console.log(error)
  });
  
 
  createProduct = () => this.service.createProduct(this.product).subscribe({
    next: (result) => console.log(result),
    error: (error: HttpErrorResponse) => {
      if(error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.message);
      }else {
        // server side error
        console.error(`Backend returned code ${error.status}, body was: ${error.message}`);
      }
      
    }
  });

}
