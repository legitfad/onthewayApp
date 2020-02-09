import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsStripePageRoutingModule } from './cs-stripe-routing.module';

import { CsStripePage } from './cs-stripe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsStripePageRoutingModule
  ],
  declarations: [CsStripePage]
})
export class CsStripePageModule {}
