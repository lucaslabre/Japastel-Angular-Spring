import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  products?: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

  // getProductsByType (type: string) {
  //   if (type === this.products.groupType) {

  //   }
  // }

}
