import React from "react"

function SearchBar({ onSort, onSearch, sort }) {
  const handleSort = ({ target: { value } }) => onSort(value)

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort === "Alphabetically"}
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === "Price"}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={({ target: { value } }) => onSearch(value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  )
}

export default SearchBar
