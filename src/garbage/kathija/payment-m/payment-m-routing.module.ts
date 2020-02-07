import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentMPage } from './payment-m.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentMPageRoutingModule {}
