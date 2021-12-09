import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosPageComponent } from './pages/pedidos-page/pedidos-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [
    PedidosPageComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PedidosModule { }
