import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentMPageRoutingModule } from './payment-m-routing.module';

import { PaymentMPage } from './payment-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentMPageRoutingModule
  ],
  declarations: [PaymentMPage]
})
export class PaymentMPageModule {}
