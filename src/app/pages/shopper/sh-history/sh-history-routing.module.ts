import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShHistoryPage } from './sh-history.page';

const routes: Routes = [
  {
    path: '',
    component: ShHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShHistoryPageRoutingModule {}
