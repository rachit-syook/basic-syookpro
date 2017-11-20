import React from 'react';
import { Switch, Route } from 'react-router'

import HomePage from './components/home';
import AccountSetUpPage from './components/accountSetUp';
import LoginPage from './components/login';
import dashboard from './components/dashboard';
import UsersEdit from './components/usersEdit';
import UsersNew from './components/usernew'

export const routes = () => {
  return(
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" component={AccountSetUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/users-edit" component={UsersEdit}/>
        <Route path="/users-new" component={UsersNew}/>
    </Switch>
  )
}
