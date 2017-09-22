import React from 'react'
import UserAPI from './api'
import { Link } from 'react-router-dom'

const AllUsers = () => (
  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>E-mail</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      {
        UserAPI.all().map(u => (
          <tr key={u.id}>
            <td><Link to={`/users/${u.id}`}>{u.name}</Link></td><td>{u.username}</td><td>{u.email}</td><td>{u.address.street}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default AllUsers
