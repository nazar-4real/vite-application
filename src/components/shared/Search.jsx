import { useState } from "react"

const Search = ({ onTermUpdate, disabledInput }) => {
  const [term, setTerm] = useState('');

  const onInputUpdate = (value) => {
    setTerm(value);
    onTermUpdate(value);
  }

  return (
    <form className="search"
      style={{
        marginBottom: '20px'
      }}>
      <label className="search-label">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your request"
          value={term}
          onChange={(e) => onInputUpdate(e.target.value)}
          disabled={disabledInput}
        />
      </label>
    </form>
  )
}

export default Search