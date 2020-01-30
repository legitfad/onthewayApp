import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShProgressChangePageRoutingModule } from './sh-progress-change-routing.module';

import { ShProgressChangePage } from './sh-progress-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShProgressChangePageRoutingModule
  ],
  declarations: [ShProgressChangePage]
})
export class ShProgressChangePageModule {}
