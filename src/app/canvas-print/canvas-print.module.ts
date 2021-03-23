import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule } from '@ionic/angular';

import { CanvasPrintPageRoutingModule } from './canvas-print-routing.module';

import { CanvasPrintPage } from './canvas-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxQRCodeModule,
    IonicModule,
    CanvasPrintPageRoutingModule
  ],
  declarations: [CanvasPrintPage]
})
export class CanvasPrintPageModule {}
