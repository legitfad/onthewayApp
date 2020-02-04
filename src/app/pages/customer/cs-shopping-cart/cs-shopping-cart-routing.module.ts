import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsShoppingCartPage } from './cs-shopping-cart.page';

const routes: Routes = [
  {
    path: '',
    component: CsShoppingCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsShoppingCartPageRoutingModule {}
