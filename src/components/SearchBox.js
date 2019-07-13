import React from 'react'

const SearchBox = ({ handleChange }) => {
  return (
    <section className="section">
      <input
        type="text"
        className="input"
        placeholder="Search for a kitten"
        onChange={handleChange}
      />
    </section>
  )
}

export default SearchBox
