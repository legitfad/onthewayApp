import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsProfilePageRoutingModule } from './cs-profile-routing.module';

import { CsProfilePage } from './cs-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsProfilePageRoutingModule
  ],
  declarations: [CsProfilePage]
})
export class CsProfilePageModule {}
