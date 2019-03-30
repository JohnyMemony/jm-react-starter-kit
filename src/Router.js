import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ROUTES from './configs/routes';

import PageExample from './pages/PageExample/PageExample';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.ROOT} component={PageExample} />
    </Switch>
  </Router>
);

export default AppRouter;
