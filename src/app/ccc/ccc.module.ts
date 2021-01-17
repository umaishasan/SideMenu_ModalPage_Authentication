import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CccPageRoutingModule } from './ccc-routing.module';

import { CccPage } from './ccc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CccPageRoutingModule
  ],
  declarations: [CccPage]
})
export class CccPageModule {}
