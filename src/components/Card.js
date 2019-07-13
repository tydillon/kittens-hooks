import React from 'react'

const Card = ({ user }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child box column">
        <img
          alt="kitten"
          src={`https://robohash.org/1${user.id}?set=set4&size=150x150`}
          width="180"
          height="180"
        />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </article>
    </div>
  )
}

export default Card
