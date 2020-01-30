import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/authentication/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sh-activity',
    loadChildren: () => import('./pages/shopper/sh-activity/sh-activity.module').then( m => m.ShActivityPageModule)
  },
  {
    path: 'sh-history',
    loadChildren: () => import('./pages/shopper/sh-history/sh-history.module').then( m => m.ShHistoryPageModule)
  },
  {
    path: 'sh-order-info/:id',
    loadChildren: () => import('./pages/shopper/sh-order-info/sh-order-info.module').then( m => m.ShOrderInfoPageModule)
  },
  {
    path: 'sh-new-orders',
    loadChildren: () => import('./pages/shopper/sh-new-orders/sh-new-orders.module').then( m => m.ShNewOrdersPageModule)
  },
  {
    path: 'cs-shop-list',
    loadChildren: () => import('./pages/customer/cs-shop-list/cs-shop-list.module').then( m => m.CsShopListPageModule)
  },
  {
    path: 'cs-shop-items',
    loadChildren: () => import('./pages/customer/cs-shop-items/cs-shop-items.module').then( m => m.CsShopItemsPageModule)
  },
  {
    path: 'cs-cart-modal',
    loadChildren: () => import('./modals/customer/cs-cart-modal/cs-cart-modal.module').then( m => m.CsCartModalPageModule)
  },
  {
    path: 'cs-order-collect',
    loadChildren: () => import('./modals/customer/cs-order-collect/cs-order-collect.module').then( m => m.CsOrderCollectPageModule)
  },
  {
    path: 'sh-progress-change',
    loadChildren: () => import('./modals/shopper/sh-progress-change/sh-progress-change.module').then( m => m.ShProgressChangePageModule)
  },
  {
    path: 'sh-qr',
    loadChildren: () => import('./modals/shopper/sh-qr/sh-qr.module').then( m => m.ShQRPageModule)
  },
  {
    path: 'cs-item-info',
    loadChildren: () => import('./pages/customer/cs-item-info/cs-item-info.module').then( m => m.CsItemInfoPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
