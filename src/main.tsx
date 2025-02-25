import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { Providers } from './App/Providers.tsx';
import './index.css';
import { RouterProvider } from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RouterProvider />
    </Providers>
  </StrictMode>
);
