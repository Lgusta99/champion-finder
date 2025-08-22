import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry
  },
  {
    path: ':id',
    loadComponent: () => import('../pages/main-page/main-page').then(m => m.MainPage)
  }
];
