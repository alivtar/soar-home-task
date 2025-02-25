import { Navigate, type RouteObject } from 'react-router-dom';

import { PanelLayout } from '@/features/panel/PanelLayout';

import { PanelRootLayout } from './PanelRootLayout';

export const panelRoutes: RouteObject = {
  path: 'panel',
  element: <PanelRootLayout />,
  children: [
    { index: true, element: <Navigate to="/" replace /> },
    {
      path: '',
      element: <PanelLayout />,
      lazy: () => import('../../App/panel/dashboard/page'),
    },
  ],
};
