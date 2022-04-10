import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './search.scss'

function Search() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const formSubmitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
    setInput('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FaSearch /> */}
      <input
        onChange={(e) => {
          setInput(e.target.value)
        }}
        value={input}
        type='text'
        placeholder='Search your meal...'
      />
    </form>
  )
}

export default Search
