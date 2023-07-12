import React from 'react'
import { Products } from '../../Products'
import Product from './Product'
import './Shop.css';

function Shop() {
  return (
    <div className='shop' >
        <div className='shopTitle' >
           <h1>Mini Cart</h1>
        </div>
        <div className='products' >
{Products.map(product=>(
<Product data={product} />
))}
 
        </div>
        </div>
  )
}

export default Shop