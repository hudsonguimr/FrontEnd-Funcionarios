import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Principal from '../pages/Principal';
import Detalhes from '../pages/Detalhes';
import FuncionarioCriado from '../pages/FuncionarioCriado';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Principal} />
    <Route path="/detalhes/:id" exact component={Detalhes} />
    <Route path="/novo/:id" exact component={FuncionarioCriado} />
  </Switch>
);

export default Routes;
