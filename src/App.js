import React from 'react'
import CardList from './components/Card-List'
import './App.css'
import 'bulma/css/bulma.css'

function App() {
  return (
    <section className="section">
      <h1 class="hero is-primary is-bold"> Helloooo </h1>
      <CardList className="tile is-ancestor" />
    </section>
  )
}

export default App
