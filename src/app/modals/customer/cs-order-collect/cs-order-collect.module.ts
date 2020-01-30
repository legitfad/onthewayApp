import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsOrderCollectPageRoutingModule } from './cs-order-collect-routing.module';

import { CsOrderCollectPage } from './cs-order-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsOrderCollectPageRoutingModule
  ],
  declarations: [CsOrderCollectPage]
})
export class CsOrderCollectPageModule {}
