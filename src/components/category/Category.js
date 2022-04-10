import { FaPizzaSlice, FaHamburger, FaHome } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import './category.scss'

function Category() {
  return (
    <div className='category'>
      <NavLink className='category__item' to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className='category__item' to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink className='category__item' to={'/'}>
        <FaHome />
        <h4>Home</h4>
      </NavLink>
      <NavLink className='category__item' to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink className='category__item' to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </NavLink>
    </div>
  )
}

export default Category
