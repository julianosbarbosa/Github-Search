import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Repository from './pages/Repository/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/repository/:repository" component={Repository} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
