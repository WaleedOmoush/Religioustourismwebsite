import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import SiteDetailPage from './pages/SiteDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: ':country',
        Component: CountryPage
      },
      {
        path: ':country/:siteId',
        Component: SiteDetailPage
      }
    ]
  }
]);
