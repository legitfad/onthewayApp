import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsShoppingCartPageRoutingModule } from './cs-shopping-cart-routing.module';

import { CsShoppingCartPage } from './cs-shopping-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsShoppingCartPageRoutingModule
  ],
  declarations: [CsShoppingCartPage]
})
export class CsShoppingCartPageModule {}
