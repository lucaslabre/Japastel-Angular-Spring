import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  products: Array<Product> = [
    { _id:1, name: 'Carne', price: 5.0, groupType: 'pastel' },
    { _id:2, name: 'Queijo', price: 5.0, groupType: 'pastel' },
    { _id:3, name: 'Frango', price: 5.0, groupType: 'pastel' },
    { _id:4, name: 'Carne', price: 5.0, groupType: 'bolinho' },
    { _id:5, name: 'Kibe', price: 5.0, groupType: 'bolinho' },
    { _id:6, name: 'Caldo 1/2L', price: 5.0, groupType: 'bebida' },
    { _id:7, name: 'Caldo 1L', price: 5.0, groupType: 'bebida' },
  ];

  selectedProducts: Array<Product> = [];

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }

  getSelectedProducts(): Array<Product> {
    return this.selectedProducts;
  }

  getProductsByGroupType(product: string): Array<Product> {
    return this.products.filter(prod => prod.groupType === product);
  }

  sumProduct(product: Product): void {
    this.selectedProducts.push(product);
  }

  subtractProduct(product: Product): void {
    let removedProduct = this.selectedProducts.findIndex(prod => product === prod);
    this.selectedProducts.splice(removedProduct, 1);
  }

}
