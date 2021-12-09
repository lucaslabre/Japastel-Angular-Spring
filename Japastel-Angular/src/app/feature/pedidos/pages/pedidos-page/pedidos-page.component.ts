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
    
  }

}
