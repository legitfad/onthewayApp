import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsReviewPage } from './cs-review.page';

const routes: Routes = [
  {
    path: '',
    component: CsReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsReviewPageRoutingModule {}
