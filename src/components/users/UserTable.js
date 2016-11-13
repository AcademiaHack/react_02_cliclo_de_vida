import React from 'react'
import User from './User'

export default class UserTable extends React.Component {
  render () {
    const users = this.props.users.map((user) => {
      return(
        <User userData={user} key={user.id}/>
      )
    })
    return (
      <div className="col-xs-6">
        <table id="usersTable" className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>DNI</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    )
  }
}
