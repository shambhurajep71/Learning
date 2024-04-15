import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(remove(id));
  }
  return (
    <div>
      {
        items.map((product, index) => {
          return (
            <div key={product?.id || index} className='cartCard'>
              <img src={product?.image} alt={product?.title} />
              <h6>{product?.title}</h6>
              <h5> {product?.price}</h5>
              <button className='remove-btn'
                onClick={() => {
                  removeFromCartHandler(product?.id);
                }}> Remove From Cart</button>

            </div>
          )
        })
      }
    </div>
  )
}

export default Cart