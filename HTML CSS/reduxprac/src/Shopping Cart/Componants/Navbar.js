import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from  'react-redux';


const Navbar = () => {
   const items = useSelector( (state) => state.cart);
   console.log(items);
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <h2> Shopping Cart (Using redux)</h2>
        <div>
            <Link className='navLink' to='/'> Home</Link>
            <Link className='navLink' to='/cart'> Cart</Link>
            <span className='cartCount'> Cart Item count : {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar