import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsItemInfoPageRoutingModule } from './cs-item-info-routing.module';

import { CsItemInfoPage } from './cs-item-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsItemInfoPageRoutingModule
  ],
  declarations: [CsItemInfoPage]
})
export class CsItemInfoPageModule {}
