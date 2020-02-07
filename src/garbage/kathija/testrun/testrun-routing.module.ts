import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestrunPage } from './testrun.page';

const routes: Routes = [
  {
    path: '',
    component: TestrunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestrunPageRoutingModule {}
