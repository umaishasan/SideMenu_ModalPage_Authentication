import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPagesPage } from './tab-pages.page';

const routes: Routes = [
  {
    path: '',
    component: TabPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPagesPageRoutingModule {}
