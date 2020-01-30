import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShNewOrdersPage } from './sh-new-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ShNewOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShNewOrdersPageRoutingModule {}
