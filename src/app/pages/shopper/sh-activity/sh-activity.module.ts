import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShActivityPageRoutingModule } from './sh-activity-routing.module';

import { ShActivityPage } from './sh-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShActivityPageRoutingModule
  ],
  declarations: [ShActivityPage]
})
export class ShActivityPageModule {}
