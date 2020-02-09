import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsRecieptsPageRoutingModule } from './cs-reciepts-routing.module';

import { CsRecieptsPage } from './cs-reciepts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsRecieptsPageRoutingModule
  ],
  declarations: [CsRecieptsPage]
})
export class CsRecieptsPageModule {}
