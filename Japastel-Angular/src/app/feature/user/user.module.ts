import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserCardComponent } from './components/user-card/user-card.component';


@NgModule({
  declarations: [
    UserPageComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
