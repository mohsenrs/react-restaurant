import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './popular.scss'
import { Link } from 'react-router-dom'
import food from '../assets/food-tray.png'

function Popular() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    )
    const data = await api.json()

    setPopular(data.recipes)
    console.log(data.recipes)
  }

  return (
    <>
      {popular.length !== 0 && (
        <div className='popular'>
          <h1>Popular</h1>
          <Splide
            options={{
              perPage: 4,
              pagination: false,
              drag: 'free',
              gap: '5rem',
              rewind: true,
              breakpoints: {
                1080: {
                  perPage: 3,
                },
                800: {
                  perPage: 2,
                },
                580: {
                  perPage: 1,
                },
              },
            }}
          >
            {popular.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <div className='content'>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img
                      src={recipe.image ? recipe.image : food}
                      alt={recipe.title}
                    />
                    <div className='gradient'></div>
                  </Link>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </>
  )
}

export default Popular
