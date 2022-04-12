import { useState } from 'react'
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
