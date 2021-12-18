import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  templateUrl: './pedidos-page.component.html',
  styleUrls: ['./pedidos-page.component.scss']
})
export class PedidosPageComponent implements OnInit {

  panelOpenState = false;

  products: Array<Product> = this.pedidosService.getProducts();
  selectedProducts: Array<Product> = this.pedidosService.getSelectedProducts();

  constructor(
    private pedidosService: PedidosService
  ) { }

  ngOnInit(): void { }

  getProductsByGroupType(groupType: string): Array<Product> {
    return this.pedidosService.getProductsByGroupType(groupType);
  }

  send() {
    this.pedidosService.countProducts(this.selectedProducts);
    // const sortedProducts = this.selectedProducts.sort((Pa, Pb) => Pa._id - Pb._id);
    // console.log(sortedProducts);
    // let cart = [];
    // let count = 1;
    // for (let i = 1; i < sortedProducts.length; i++) {
    //   if (sortedProducts[i]._id == sortedProducts[i-1]._id) {
    //     count += 1;
    //   } else {
    //     cart.push([count, sortedProducts[i-1]]);
    //     count = 1;
    //   }
    // }
    // cart.push([count, sortedProducts[sortedProducts.length-1]]);
    // console.log(cart);
    // var counts = {};
    // this.selectedProducts.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  }

}
