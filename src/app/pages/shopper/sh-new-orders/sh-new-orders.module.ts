import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShNewOrdersPageRoutingModule } from './sh-new-orders-routing.module';

import { ShNewOrdersPage } from './sh-new-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShNewOrdersPageRoutingModule
  ],
  declarations: [ShNewOrdersPage]
})
export class ShNewOrdersPageModule {}
