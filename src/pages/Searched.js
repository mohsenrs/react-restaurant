import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import food from '../assets/food-tray.png'
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
      {searchedRecipes.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h3>Searched: {params.search}</h3>
          <div className='searched'>
            {searchedRecipes.map((item) => {
              return (
                <div className='card' key={item.id}>
                  <Link to={'/recipe/' + item.id}>
                    <img
                      src={item.image ? item.image : food}
                      alt={item.title}
                    />
                    <h4>{item.title}</h4>
                  </Link>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default Searched
