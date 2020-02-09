import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsRecieptsPage } from './cs-reciepts.page';

const routes: Routes = [
  {
    path: '',
    component: CsRecieptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsRecieptsPageRoutingModule {}
