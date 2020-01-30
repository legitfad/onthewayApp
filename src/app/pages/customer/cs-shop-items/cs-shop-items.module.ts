import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsShopItemsPageRoutingModule } from './cs-shop-items-routing.module';

import { CsShopItemsPage } from './cs-shop-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsShopItemsPageRoutingModule
  ],
  declarations: [CsShopItemsPage]
})
export class CsShopItemsPageModule {}
