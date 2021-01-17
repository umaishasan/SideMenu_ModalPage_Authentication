import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AAAPageRoutingModule } from './aaa-routing.module';

import { AAAPage } from './aaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AAAPageRoutingModule
  ],
  declarations: [AAAPage]
})
export class AAAPageModule {}
