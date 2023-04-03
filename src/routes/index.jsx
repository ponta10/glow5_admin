import { useRoutes } from 'react-router-dom';

import * as React from 'react';
// import { Top } from '../features/Top/Top';
// import { Blog } from '../features/Blog/Blog';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '../utils/lazyImport';
import { Spinner } from '../component//Spinner';
import { useAuth } from '../lib/auth';
import { Login } from '../features/Login/Login';
import { Register } from '../features/Register/Register';

const { Top } = lazyImport(() => import('../features/Top/Top'), 'Top');
const { Blog } = lazyImport(() => import('../features/Blog/Blog'), 'Blog');

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  );
}

export function AppRoutes() {
  const { user } = useAuth();
  console.log(useAuth());

  const commonRoutes = [
    {
      path: '/',
      element: user ? <Top /> : <Login />,
    },
  ];

  const protectedRoutes = [
    {
      path: 'app',
      element: <App />,
      children: [
        { path: 'top', element: <Top /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]

  const routes = user ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes,...commonRoutes]);

  return <div>{element}</div>;
}
