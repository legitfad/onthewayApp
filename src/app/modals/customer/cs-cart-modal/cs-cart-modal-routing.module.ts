import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsCartModalPage } from './cs-cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CsCartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsCartModalPageRoutingModule {}
