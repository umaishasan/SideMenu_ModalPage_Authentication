import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CccPage } from './ccc.page';

const routes: Routes = [
  {
    path: '',
    component: CccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CccPageRoutingModule {}
