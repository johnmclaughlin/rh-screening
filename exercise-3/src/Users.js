import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllUsers from './AllUsers'
import User from './User'

// The Roster component matches one of two different routes
// depending on the full pathname
const Users = () => (
  <Switch>
    <Route exact path='/users' component={AllUsers}/>
    <Route path='/users/:id' component={User}/>
  </Switch>
)

export default Users
