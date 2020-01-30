import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShOrderInfoPageRoutingModule } from './sh-order-info-routing.module';

import { ShOrderInfoPage } from './sh-order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShOrderInfoPageRoutingModule
  ],
  declarations: [ShOrderInfoPage]
})
export class ShOrderInfoPageModule {}
