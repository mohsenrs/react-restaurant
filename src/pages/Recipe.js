import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import './recipe.scss'

function Recipe() {
  const [detail, setDetail] = useState([])
  const [activeTab, setActiveTab] = useState('instructions')
  const params = useParams()

  const getDetail = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await api.json()

    setDetail(data)
  }

  useEffect(() => {
    getDetail(params.name)
  }, [params.name])

  return (
    <>
      {detail.length === 0 ? (
        <Loader />
      ) : (
        <div className='recipe'>
          <div>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} />
          </div>
          <div className='info'>
            <button
              className={activeTab === 'instructions' ? 'active' : ''}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
            <button
              className={activeTab === 'ingredients' ? 'active' : ''}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            {activeTab === 'instructions' && (
              <div className='instructions'>
                <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                <p
                  dangerouslySetInnerHTML={{ __html: detail.instructions }}
                ></p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <ul>
                {detail.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
