import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsHistoryPageRoutingModule } from './cs-history-routing.module';

import { CsHistoryPage } from './cs-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsHistoryPageRoutingModule
  ],
  declarations: [CsHistoryPage]
})
export class CsHistoryPageModule {}
