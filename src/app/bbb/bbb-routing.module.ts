import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbbPage } from './bbb.page';

const routes: Routes = [
  {
    path: '',
    component: BbbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbbPageRoutingModule {}
