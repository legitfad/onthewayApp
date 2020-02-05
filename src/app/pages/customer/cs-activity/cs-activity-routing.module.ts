import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsActivityPage } from './cs-activity.page';

const routes: Routes = [
  {
    path: '',
    component: CsActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsActivityPageRoutingModule {}
