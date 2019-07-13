import React, { useEffect, useState } from 'react'
import CardList from './components/Card-List'
import SearchBox from './components/SearchBox'
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
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredKittens = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <section className="section">
      <div className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"> The Sweetest Kittens </h1>
          </div>
        </div>
      </div>
      <SearchBox handleChange={handleChange} />
      <CardList users={filteredKittens} />
    </section>
  )
}

export default App
