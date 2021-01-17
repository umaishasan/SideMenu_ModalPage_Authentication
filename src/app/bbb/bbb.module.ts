import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbbPageRoutingModule } from './bbb-routing.module';

import { BbbPage } from './bbb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbbPageRoutingModule
  ],
  declarations: [BbbPage]
})
export class BbbPageModule {}
