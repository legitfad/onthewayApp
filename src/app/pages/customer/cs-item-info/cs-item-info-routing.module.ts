import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsItemInfoPage } from './cs-item-info.page';

const routes: Routes = [
  {
    path: '',
    component: CsItemInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsItemInfoPageRoutingModule {}
