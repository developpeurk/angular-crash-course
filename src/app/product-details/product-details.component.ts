import { Component, Input, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product: ProductRepresentation = {};

  constructor() { }

  ngOnInit(): void {
  }

}
