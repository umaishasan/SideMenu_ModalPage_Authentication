import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CModelPageRoutingModule } from './c-model-routing.module';

import { CModelPage } from './c-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CModelPageRoutingModule
  ],
  declarations: [CModelPage]
})
export class CModelPageModule {}
