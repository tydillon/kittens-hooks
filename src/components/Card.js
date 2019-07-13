import React from 'react'

const Card = ({ user }) => {
  return (
    <div className="tile is-child is-primary">
      <img
        alt="kitten"
        src={`https://robohash.org/${user.login.uuid}?size=200x200&set=set4`}
      />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p>{user.gender}</p>
      <p>{user.location.state}</p>
    </div>
  )
}

export default Card
