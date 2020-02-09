import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsHistoryPage } from './cs-history.page';

const routes: Routes = [
  {
    path: '',
    component: CsHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsHistoryPageRoutingModule {}
