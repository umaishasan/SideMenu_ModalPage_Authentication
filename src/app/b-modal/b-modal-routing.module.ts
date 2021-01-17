import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BModalPage } from './b-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BModalPageRoutingModule {}
