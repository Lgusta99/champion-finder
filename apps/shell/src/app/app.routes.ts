import { Route } from '@angular/router';
import { App } from './app';

export const appRoutes: Route[] = [
  {
    path: 'valorant',
    loadChildren: () => import('valorant/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'lol',
    loadChildren: () => import('lol/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: App,
  },
];
