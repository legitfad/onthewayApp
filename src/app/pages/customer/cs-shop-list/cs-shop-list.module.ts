import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsShopListPageRoutingModule } from './cs-shop-list-routing.module';

import { CsShopListPage } from './cs-shop-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsShopListPageRoutingModule
  ],
  declarations: [CsShopListPage]
})
export class CsShopListPageModule {}
