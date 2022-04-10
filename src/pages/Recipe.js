import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
  const [detail, setDetail] = useState([])
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

  return <div>{detail.title}</div>
}

export default Recipe
