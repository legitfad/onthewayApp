import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsShopListPage } from './cs-shop-list.page';

const routes: Routes = [
  {
    path: '',
    component: CsShopListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsShopListPageRoutingModule {}
