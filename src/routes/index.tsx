import { JSX } from 'react';

import {
  RouterProvider as RRDRouterProvider,
  RouteObject,
  createBrowserRouter,
} from 'react-router-dom';

import { RootLayout } from '../App/layout';
import { panelRoutes } from './panel/panel.routes';

const routes: Array<RouteObject> = [
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        lazy: async () => {
          const module = await import('../App/RootPage/page');
          return { Component: module.PageRoot };
        },
      },
      panelRoutes,
    ],
  },
];

export const router = createBrowserRouter(routes);

export function RouterProvider(): JSX.Element {
  return <RRDRouterProvider router={router} />;
}
