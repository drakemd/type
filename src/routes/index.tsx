import React from 'react'
import { Route, Switch } from 'react-router'
import { Login } from '../pages/login';


const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </div>
)

export default routes;