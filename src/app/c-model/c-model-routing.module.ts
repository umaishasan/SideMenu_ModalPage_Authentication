import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CModelPage } from './c-model.page';

const routes: Routes = [
  {
    path: '',
    component: CModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CModelPageRoutingModule {}
