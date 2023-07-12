import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbarr.css';


function Navbarr() {
  return (
    <div className='navbar' >
      <div className='links' >
<Link to={"/"} >Shop</Link>
<Link to={"/cart"} >
  <ShoppingCart size={40} />
</Link>
      </div>
    </div>
  )
}

export default Navbarr