import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOneComponent } from './navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './navbar-two/navbar-two.component';
import { FooterComponent } from './footer/footer.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule
  ],
  declarations: [NavbarOneComponent, NavbarTwoComponent, FooterComponent],
      exports: [
      MenubarModule,
      
      NavbarOneComponent,
      NavbarTwoComponent,
      FooterComponent
    ],
})
export class SharedModuleModule { }
