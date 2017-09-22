import React from 'react'
import UserAPI from '../api'
import { Link } from 'react-router-dom'

const User = (props) => {
  const user = UserAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!user) {
    return <div>Sorry, but the user was not found</div>
  }
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">User Information<Link to='/'>&larr; Back to all users</Link></th>
        </tr>
      </thead>
      <tbody>
        <tr><th>Name</th><td>{user.name}</td></tr>
        <tr><th>Street</th><td>{user.address.street}</td></tr>
        <tr><th>Suite</th><td>{user.address.suite}</td></tr>
        <tr><th>City/Zip</th><td>{user.address.city} {user.address.zipcode}</td></tr>
        <tr><th>Latitude</th><td>{user.address.geo.lat}</td></tr>
        <tr><th>Longitude</th><td>{user.address.geo.lng}</td></tr>
        <tr></tr>
        <tr><th>Phone</th><td>{user.phone}</td></tr>
        <tr><th>Email</th><td>{user.email}</td></tr>
        <tr></tr>
        <tr><th>Website</th><td>{user.website}</td></tr>
        <tr><th>Username</th><td>{user.username}</td></tr>
        <tr><td colSpan="2">&nbsp;</td></tr>
        <tr><th colSpan="2" >Company Information</th></tr>
        <tr><th>Name</th><td>{user.company.name}</td></tr>
        <tr><th>Catchphrase</th><td>{user.company.catchPhrase}</td></tr>
        <tr><th>BS</th><td>{user.company.bs}</td></tr>
      </tbody>
    </table>
  )
}

export default User
