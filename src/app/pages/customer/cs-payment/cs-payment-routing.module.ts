import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsPaymentPage } from './cs-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CsPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsPaymentPageRoutingModule {}
