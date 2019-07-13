import React, { useEffect, useState } from 'react'
import CardList from './components/Card-List'
import './App.css'
import 'bulma/css/bulma.css'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
  }, [])
  return (
    <section className="section">
      <div className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 class="title"> Helloooo </h1>
          </div>
        </div>
      </div>

      <CardList users={users} />
    </section>
  )
}

export default App
