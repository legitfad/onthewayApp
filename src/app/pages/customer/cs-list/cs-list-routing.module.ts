import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsListPage } from './cs-list.page';

const routes: Routes = [
  {
    path: '',
    component: CsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsListPageRoutingModule {}
