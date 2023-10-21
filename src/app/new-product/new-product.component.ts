import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product: ProductRepresentation = {};

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct():void {
      this.service.createProduct(this.product).subscribe({
        next: (product: ProductRepresentation) => {
          this.router.navigate(['/products']);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }

}
