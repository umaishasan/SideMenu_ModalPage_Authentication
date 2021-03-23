import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanvasPrintPage } from './canvas-print.page';

const routes: Routes = [
  {
    path: '',
    component: CanvasPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvasPrintPageRoutingModule {}
