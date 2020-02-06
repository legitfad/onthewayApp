import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShReviewsPageRoutingModule } from './sh-reviews-routing.module';

import { ShReviewsPage } from './sh-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShReviewsPageRoutingModule
  ],
  declarations: [ShReviewsPage]
})
export class ShReviewsPageModule {}
