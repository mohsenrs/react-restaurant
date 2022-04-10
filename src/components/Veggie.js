import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './veggie.scss'
import { Link } from 'react-router-dom'

function Veggie() {
  const [veggie, setVeggie] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const check = localStorage.getItem('veggie')

    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&diet=vegetarian`
      )
      const data = await api.json()

      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      console.log(data.recipes)
    }
  }

  return (
    <div className='veggie'>
      <h1>Veggie</h1>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          rewind: true,
          breakpoints: {
            1080: {
              perPage: 2,
            },
            580: {
              perPage: 1,
            },
          },
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <div className='content'>
              <Link to={'/recipe/' + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <div className='gradient'></div>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Veggie
