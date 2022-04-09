import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import './cuisine.scss'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    )
    const recipes = await api.json()

    setCuisine(recipes.results)
    console.log(recipes.results)
  }

  useEffect(() => {
    getRecipes(params.type)
    console.log(params.type)
  }, [params.type])

  return (
    <div className='cuisine'>
      {cuisine.map((item) => {
        return (
          <div className='card' key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Cuisine
