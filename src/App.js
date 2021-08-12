import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import MyAppHeader from '@/components/app-header';
import MyAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <HashRouter>
      <MyAppHeader />
      {renderRoutes(routes)}
      <MyAppFooter />
    </HashRouter>
  )
})
