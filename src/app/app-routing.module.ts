import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// folder/Inbox
const routes: Routes = [
  {
    path: '',
    redirectTo: 'ccc',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tab-pages',
    loadChildren: () => import('./tab-pages/tab-pages.module').then( m => m.TabPagesPageModule)
  },
  {
    path: 'aaa',
    loadChildren: () => import('./aaa/aaa.module').then( m => m.AAAPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'bbb',
    loadChildren: () => import('./bbb/bbb.module').then( m => m.BbbPageModule)
  },
  {
    path: 'b-modal',
    loadChildren: () => import('./b-modal/b-modal.module').then( m => m.BModalPageModule)
  },
  {
    path: 'ccc',
    loadChildren: () => import('./ccc/ccc.module').then( m => m.CccPageModule)
  },
  {
    path: 'c-model',
    loadChildren: () => import('./c-model/c-model.module').then( m => m.CModelPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
