import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './popular.scss'

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
    <div className='popular'>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          rewind: true,
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <div className='content' >
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Popular
