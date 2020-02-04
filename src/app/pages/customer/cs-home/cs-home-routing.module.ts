import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsHomePage } from './cs-home.page';

const routes: Routes = [
  {
    path: '',
    component: CsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsHomePageRoutingModule {}
