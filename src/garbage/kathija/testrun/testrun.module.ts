import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestrunPageRoutingModule } from './testrun-routing.module';

import { TestrunPage } from './testrun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestrunPageRoutingModule
  ],
  declarations: [TestrunPage]
})
export class TestrunPageModule {}
