import React, { useState, useEffect } from 'react'
import Card from './Card'

const CardList = props => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(users => setUsers(users.results))
  }, [])
  return (
    <div className="tile is-parent">
      {users.map(user => {
        return <Card key={user.login.uuid} user={user} />
      })}
    </div>
  )
}

export default CardList
