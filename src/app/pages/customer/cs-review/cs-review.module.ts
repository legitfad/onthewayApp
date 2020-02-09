import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsReviewPageRoutingModule } from './cs-review-routing.module';

import { CsReviewPage } from './cs-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsReviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CsReviewPage]
})
export class CsReviewPageModule {}
