import React from 'react'
import Card from './Card'

const CardList = ({ users }) => {
  return (
    <section className="tile is-ancestor columns is-multiline">
      {users.map(user => {
        return <Card key={user.id} user={user} />
      })}
    </section>
  )
}

export default CardList
