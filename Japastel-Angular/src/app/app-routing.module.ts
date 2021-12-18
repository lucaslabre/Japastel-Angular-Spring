import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './feature/login/pages/login-page/login-page.component';
import { PedidosPageComponent } from './feature/pedidos/pages/pedidos-page/pedidos-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
  { path: 'pedidos', component: PedidosPageComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
