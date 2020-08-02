import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pokeball from '../pages/Pokeball';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokeball" component={Pokeball} />
  </Switch>
);

export default Routes;
