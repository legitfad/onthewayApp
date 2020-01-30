import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsCartModalPageRoutingModule } from './cs-cart-modal-routing.module';

import { CsCartModalPage } from './cs-cart-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsCartModalPageRoutingModule
  ],
  declarations: [CsCartModalPage]
})
export class CsCartModalPageModule {}
