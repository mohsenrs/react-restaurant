import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './searched.scss'

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearchedRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const recipes = await api.json()

    setSearchedRecipes(recipes.results)
    console.log(recipes.results)
  }

  useEffect(() => {
    getSearchedRecipes(params.search)
  }, [params.search])

  return (
    <>
      <h3>Searched: {params.search}</h3>
      <div className='searched'>
        {searchedRecipes.map((item) => {
          return (
            <div className='card' key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Searched
