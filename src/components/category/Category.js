import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './category.scss'

function Category() {
  return (
    <div className='category'>
      <Link className='category__item' to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <Link className='category__item' to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Link>
      <Link className='category__item' to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </Link>
      <Link className='category__item' to={'/cuisine/Japense'}>
        <GiChopsticks />
        <h4>Japenese</h4>
      </Link>
    </div>
  )
}

export default Category
