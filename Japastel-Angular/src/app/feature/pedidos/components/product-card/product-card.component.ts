import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product?: Product;

  @Input()
  count: number = 0;

  constructor(
    private pedidosService: PedidosService
  ) { }

  ngOnInit(): void {
  }

  cart(product: Product) {
    this.pedidosService.sumProduct(product);
    this.count += 1;
    console.log(this.pedidosService.getSelectedProducts(), this.count);
  }

  subtract(product: Product) {
    if (this.count != 0) {
      this.count -= 1;
      this.pedidosService.subtractProduct(product);
    }
    console.log(this.pedidosService.getSelectedProducts(), this.count);
  }

}
