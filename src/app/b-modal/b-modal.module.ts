import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BModalPageRoutingModule } from './b-modal-routing.module';

import { BModalPage } from './b-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BModalPageRoutingModule
  ],
  declarations: [BModalPage]
})
export class BModalPageModule {}
