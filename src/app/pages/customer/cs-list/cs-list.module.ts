import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsListPageRoutingModule } from './cs-list-routing.module';

import { CsListPage } from './cs-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsListPageRoutingModule
  ],
  declarations: [CsListPage]
})
export class CsListPageModule {}
