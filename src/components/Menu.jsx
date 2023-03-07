import React from 'react'
import { Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import '../styles/menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="view"><Link to='/'><BiMenu color='#d1d1d1'/></Link></div>
        <div className="create"><Link to='/create'><AiOutlinePlusCircle color='#d1d1d1'/></Link></div>
        <div className="search"><Link to='/search'><AiOutlineSearch color='#d1d1d1'/></Link></div>
    </div>
  )
}

export default Menu
