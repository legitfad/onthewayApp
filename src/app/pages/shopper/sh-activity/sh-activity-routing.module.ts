import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShActivityPage } from './sh-activity.page';

const routes: Routes = [
  {
    path: '',
    component: ShActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShActivityPageRoutingModule {}
