import { createBrowserRouter } from 'react-router-dom';
import { Home } from 'ui/components/pages/home';
import { ServiceOffer } from 'ui/components/pages/service';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { Tools } from 'ui/components/pages/tools/tools';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    element: (
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Layout />
      </QueryParamProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'services',
        element: <ServiceOffer />,
      },
      { path: 'tools', element: <Tools /> },
    ],
  },
]);
