import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllUsers from './AllUsers'
import User from './User'

// The Roster component matches one of two different routes
// depending on the full pathname
const Users = () => (
  <Switch>
    <Route exact path='/' component={AllUsers}/>
    <Route path='/:id' component={User}/>
  </Switch>
)

export default Users
