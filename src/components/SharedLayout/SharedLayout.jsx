import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from 'components/Menu/Menu';
import Loader from 'components/Loader/Loader';

import css from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Menu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
