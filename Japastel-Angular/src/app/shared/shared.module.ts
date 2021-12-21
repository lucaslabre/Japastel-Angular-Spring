import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconDirective } from './directives/icon.directive';
import { ButtonDirective } from './directives/button.directive';
import { UserTypePipe } from './pipes/user-type.pipe';

// Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { CpfPipe } from './pipes/cpf.pipe';
import { CelularPipe } from './pipes/celular.pipe';


const components = [
  HeaderComponent,
  FooterComponent
];

const materialModules = [
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatCardModule
];

const directives = [
  IconDirective,
  ButtonDirective,
]

const pipes = [
  UserTypePipe,
  CpfPipe,
  CelularPipe,
];


@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...materialModules,
    ...directives,
    ...pipes
  ]
})
export class SharedModule { }
