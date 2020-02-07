import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsProfilePage } from './cs-profile.page';

const routes: Routes = [
  {
    path: '',
    component: CsProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsProfilePageRoutingModule {}
