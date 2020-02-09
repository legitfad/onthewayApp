import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsStripePage } from './cs-stripe.page';

const routes: Routes = [
  {
    path: '',
    component: CsStripePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsStripePageRoutingModule {}
