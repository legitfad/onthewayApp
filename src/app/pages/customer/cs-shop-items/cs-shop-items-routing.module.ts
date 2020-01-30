import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsShopItemsPage } from './cs-shop-items.page';

const routes: Routes = [
  {
    path: '',
    component: CsShopItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsShopItemsPageRoutingModule {}
