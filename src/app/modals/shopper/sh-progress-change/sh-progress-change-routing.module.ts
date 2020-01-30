import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShProgressChangePage } from './sh-progress-change.page';

const routes: Routes = [
  {
    path: '',
    component: ShProgressChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShProgressChangePageRoutingModule {}
