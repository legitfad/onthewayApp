import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sh-activity',
        loadChildren: () => import('../shopper/sh-activity/sh-activity.module').then( m => m.ShActivityPageModule)
      },
      {
        path: 'sh-new-orders',
        loadChildren: () => import('../shopper/sh-new-orders/sh-new-orders.module').then( m => m.ShNewOrdersPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sh-activity'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
