import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconDirective } from './directives/icon.directive';

// Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ButtonDirective } from './directives/button.directive';


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
  MatButtonModule
];

const directives = [
  IconDirective,
  ButtonDirective,
]

const pipes = [
];


@NgModule({
  declarations: [
    ...components,
    ...directives,
    // ...pipes,
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
    // ...pipes
  ]
})
export class SharedModule { }
