import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasPageRoutingModule } from './clas-routing.module';

import { ClasPage } from './clas.page';
import { AdminPage } from '../admin/admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasPageRoutingModule
  ],
  declarations: [ClasPage],
  providers: [AdminPage]
})
export class ClasPageModule {}
