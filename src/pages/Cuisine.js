import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import './cuisine.scss'
import Loader from '../components/Loader/Loader'
import food from '../assets/food-tray.png'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    )
    const recipes = await api.json()

    setCuisine(recipes.results)
  }

  useEffect(() => {
    getRecipes(params.type)
    console.log(params.type)
  }, [params.type])

  return (
    <>
      {cuisine.length === 0 ? (
        <Loader />
      ) : (
        <>
          <motion.div
            className='cuisine'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cuisine.map((item) => {
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
          </motion.div>
        </>
      )}
    </>
  )
}

export default Cuisine
