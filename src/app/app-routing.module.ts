import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

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
  // {
  //   path: 'sh-activity',
  //   loadChildren: () => import('./pages/shopper/sh-activity/sh-activity.module').then( m => m.ShActivityPageModule)
  // },
  {
    path: 'sh-history', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/shopper/sh-history/sh-history.module').then( m => m.ShHistoryPageModule)
  },
  {
    path: 'sh-order-info/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/shopper/sh-order-info/sh-order-info.module').then( m => m.ShOrderInfoPageModule)
  },
  // {
  //   path: 'sh-new-orders',
  //   loadChildren: () => import('./pages/shopper/sh-new-orders/sh-new-orders.module').then( m => m.ShNewOrdersPageModule)
  // },
  {
    path: 'cs-order-collect', canActivate: [AuthGuard],
    loadChildren: () => import('./modals/customer/cs-order-collect/cs-order-collect.module').then( m => m.CsOrderCollectPageModule)
  },
  {
    path: 'sh-progress-change', canActivate: [AuthGuard],
    loadChildren: () => import('./modals/shopper/sh-progress-change/sh-progress-change.module').then( m => m.ShProgressChangePageModule)
  },
  {
    path: 'sh-qr', canActivate: [AuthGuard],
    loadChildren: () => import('./modals/shopper/sh-qr/sh-qr.module').then( m => m.ShQRPageModule)
  },
  {
    path: 'dashboard', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cs-shopping-cart', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-shopping-cart/cs-shopping-cart.module').then( m => m.CsShoppingCartPageModule)
  },
  {
    path: 'cs-home', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-home/cs-home.module').then( m => m.CsHomePageModule)
  },
  {
    path: 'cs-list', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-list/cs-list.module').then( m => m.CsListPageModule)
  },
  {
    path: 'cs-activity', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-activity/cs-activity.module').then( m => m.CsActivityPageModule)
  },
  {
    path: 'cs-order-info/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-order-info/cs-order-info.module').then( m => m.CsOrderInfoPageModule)
  },
  {
    path: 'chat/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chats', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'sh-reviews', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/shopper/sh-reviews/sh-reviews.module').then( m => m.ShReviewsPageModule)
  },
  {
    path: 'cs-review', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-review/cs-review.module').then( m => m.CsReviewPageModule)
  },
  {
    path: 'map', canActivate: [AuthGuard],
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'cs-payment/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-payment/cs-payment.module').then( m => m.CsPaymentPageModule)
  },
  {
    path: 'cs-profile', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-profile/cs-profile.module').then( m => m.CsProfilePageModule)
  },
  {
    path: 'tabs', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cs-stripe/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/customer/cs-stripe/cs-stripe.module').then( m => m.CsStripePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
