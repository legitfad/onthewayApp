import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsHomePageRoutingModule } from './cs-home-routing.module';

import { HomePage } from './cs-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsHomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class CsHomePageModule {}
