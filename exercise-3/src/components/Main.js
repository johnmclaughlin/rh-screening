import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from './Users'

const Main = () => (
  <main>
    <Switch>
      <Route path='/' component={Users}/>
    </Switch>
  </main>
)

export default Main
