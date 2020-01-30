import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShQRPageRoutingModule } from './sh-qr-routing.module';

import { ShQRPage } from './sh-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShQRPageRoutingModule
  ],
  declarations: [ShQRPage]
})
export class ShQRPageModule {}
