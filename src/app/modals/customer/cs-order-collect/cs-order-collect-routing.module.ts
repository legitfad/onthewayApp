import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsOrderCollectPage } from './cs-order-collect.page';

const routes: Routes = [
  {
    path: '',
    component: CsOrderCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsOrderCollectPageRoutingModule {}
