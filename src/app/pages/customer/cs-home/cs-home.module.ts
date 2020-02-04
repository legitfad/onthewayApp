import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsHomePageRoutingModule } from './cs-home-routing.module';

import { CsHomePage } from './cs-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsHomePageRoutingModule
  ],
  declarations: [CsHomePage]
})
export class CsHomePageModule {}
