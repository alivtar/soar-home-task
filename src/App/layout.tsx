import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { ReactLoader } from './ReactLoader';
import { Viewport } from './components';

export function RootLayout() {
  return (
    <Suspense>
      <Viewport>
        <ReactLoader />
        <Outlet />
      </Viewport>
    </Suspense>
  );
}
