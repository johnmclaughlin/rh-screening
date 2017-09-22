import React from 'react'
import UserAPI from './api'
import { Link } from 'react-router-dom'

const User = (props) => {
  const user = UserAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!user) {
    return <div>Sorry, but the user was not found</div>
  }
  return (
    <div>
      <h1>{user.name} (#{user.id})</h1>
      <h2>Phone: {user.company.catchPhrase}</h2>
      <Link to='/users'>Back</Link>
    </div>
  )
}

export default User
