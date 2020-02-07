import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsPaymentPageRoutingModule } from './cs-payment-routing.module';

import { CsPaymentPage } from './cs-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsPaymentPageRoutingModule
  ],
  declarations: [CsPaymentPage]
})
export class CsPaymentPageModule {}
