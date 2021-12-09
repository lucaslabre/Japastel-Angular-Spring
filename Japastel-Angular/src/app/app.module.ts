import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidosModule } from './feature/pedidos/pedidos.module';
import { LoginModule } from './feature/login/login.module';

// **************************************************
// Formatar moeda para real. Ex: R$ 5.000,00
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PedidosModule,
    LoginModule
  ],
  providers: [
    // ************************************
    { provide: LOCALE_ID, useValue: 'pt' },
    // ************************************
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
