import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AAAPage } from './aaa.page';

const routes: Routes = [
  {
    path: '',
    component: AAAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AAAPageRoutingModule {}
