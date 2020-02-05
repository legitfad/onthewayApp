import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsOrderInfoPageRoutingModule } from './cs-order-info-routing.module';

import { CsOrderInfoPage } from './cs-order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsOrderInfoPageRoutingModule
  ],
  declarations: [CsOrderInfoPage]
})
export class CsOrderInfoPageModule {}
