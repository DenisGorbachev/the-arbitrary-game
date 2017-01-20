import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Match, Redirect} from 'react-router'

import App from './App'
import GamesList from './Games/GamesList'
import GamesCreate from './Games/GamesCreate'
import GamesShow from './Games/GamesShow'

export const renderRoutes = () => (
  <BrowserRouter>
    <App>
      <Match exactly pattern="/" render={routerProps => <Redirect to="/games"/>} />
      <Match exactly pattern="/games" component={GamesList} />
      <Match exactly pattern="/games/create" component={GamesCreate} />
      <Match exactly pattern="/games/show/:_id" component={GamesShow} />
    </App>
  </BrowserRouter>
);
