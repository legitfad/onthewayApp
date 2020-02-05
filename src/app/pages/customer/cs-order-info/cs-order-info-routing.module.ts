import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsOrderInfoPage } from './cs-order-info.page';

const routes: Routes = [
  {
    path: '',
    component: CsOrderInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsOrderInfoPageRoutingModule {}
