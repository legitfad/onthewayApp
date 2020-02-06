import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShReviewsPage } from './sh-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ShReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShReviewsPageRoutingModule {}
