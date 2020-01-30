import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShHistoryPageRoutingModule } from './sh-history-routing.module';

import { ShHistoryPage } from './sh-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShHistoryPageRoutingModule
  ],
  declarations: [ShHistoryPage]
})
export class ShHistoryPageModule {}
