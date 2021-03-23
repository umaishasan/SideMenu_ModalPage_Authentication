import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasPage } from './clas.page';

const routes: Routes = [
  {
    path: '',
    component: ClasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasPageRoutingModule {}
