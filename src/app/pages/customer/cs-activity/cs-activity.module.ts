import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsActivityPageRoutingModule } from './cs-activity-routing.module';

import { CsActivityPage } from './cs-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsActivityPageRoutingModule
  ],
  declarations: [CsActivityPage]
})
export class CsActivityPageModule {}
