import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosPageComponent } from './pages/pedidos-page/pedidos-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PedidosPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PedidosModule { }
